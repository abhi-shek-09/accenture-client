import '../styles/Commit.css';
import './commitData.js'
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardHeader,
  MDBCardFooter
} from 'mdb-react-ui-kit';

export default function Commit(props) {
  const [isCommitNotSubmitted, setIsCommitNotSubmitted] = React.useState(true);
  const [isPopupVisible, setPopupVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const togglePopup = () =>{
    setPopupVisible(popup => !popup)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const submitIssue = () =>{
    setInputValue("")
    setIsCommitNotSubmitted(false);
    togglePopup()
  }
  console.log(props.commit.commitScreenshot)
  return (
    <div>
    { isCommitNotSubmitted?( 
        <div>
          <MDBCard alignment='center' className='main-card'>
          <MDBCardHeader className='MDBCardHeader'>{props.commit.commitNumber}</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle className='MDBCardTitle'>{props.commit.commitTitle}</MDBCardTitle>
            <button className='MDBBtn' onClick={togglePopup}>View Commit</button>
          </MDBCardBody>
          <MDBCardFooter className='MDBCardFooter'>{props.commit.commitDate}</MDBCardFooter>
          </MDBCard>

        {isPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-button" onClick={togglePopup}>&times;</span>
              <h2>Commit {props.commit.commitNumber} Details</h2>
              <div className='commit-image-and-description'>
                {props.commit.commitScreenshot && 
                (<img src={props.commit.commitScreenshot} alt="Commit Screenshot" className="commit-image" />)}
                <p className='commit-description'>{props.commit.commitDesc}</p>
              </div>
              <input type="text" placeholder="Enter issue details if any" value={inputValue} onChange={handleInputChange} />
              <button className="submit-button" onClick={submitIssue}>Raise issue</button>
            </div>
          </div>
        )} 
      </div>):null
      }
    </div>
  );
}
