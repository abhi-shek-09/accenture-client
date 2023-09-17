import React from 'react';
import "../styles/Commit.css";
import Header from '../components/Header';
import Issues from '../components/Issues';
import issueData from '../components/myIssuesData';
import Table from '../components/Table';

export default function MyIssues() {
  const issueElements = issueData.map(commit =>{
    return <Issues key={commit.commitNumber} commit={commit} />
  })

  const [scheduleMeet, setScheduleMeet] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [meetingOptions, setMeetingOptions] = React.useState(['', '', '']);
  const [agendaValue, setAgendaValue] = React.useState(''); 
  const [dateTimeValue, setDateTimeValue] = React.useState(''); 

  const toggleMeetPopup = () => {
    setScheduleMeet(popup => !popup);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMeetingOptionChange = (event, index) => {
    const updatedOptions = [...meetingOptions];
    updatedOptions[index] = event.target.value;
    setMeetingOptions(updatedOptions);
  };

  const submitDetails = () => {
    
    setAgendaValue(inputValue);
    setDateTimeValue(meetingOptions[0]);

    setInputValue('');
    setMeetingOptions(['', '', '']);
    toggleMeetPopup();
  }

  return (
    <div className="app-container">
      <Header />
      <div className='meet-button'>
        <button className='schedule-meet' onClick={toggleMeetPopup}>Schedule meet</button>
      </div>

      {scheduleMeet && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={toggleMeetPopup}>&times;</span>
            <h2>Enter meet Details</h2>
            <input type="text" placeholder="Enter your agenda" value={inputValue} onChange={handleInputChange} className='agenda-input' />
            <div className="meeting-options">
              <input
                type="datetime-local"
                placeholder="Start Date and Time"
                value={meetingOptions[0]}
                onChange={(event) => handleMeetingOptionChange(event, 0)}
              />
            </div>
            <button className="submit-button" onClick={submitDetails}>Send details</button>
          </div>
        </div>
      )}

      <div className="content-container">
        <div className="main-content">
          {issueElements}
          <Table />
        </div>
      </div>

      {/* These are the values which i want u to send to the backend*/}
      <div className="agenda-and-date-time">
        <p>Agenda: {agendaValue}</p>
        <p>Date and Time: {dateTimeValue}</p>
      </div>
    </div>
  );
}
