import React, { useState } from 'react';

export default function CommitPopup(props) {
  const [submissions, setSubmissions] = useState([]);
  const [isCommitNotSubmitted, setIsCommitNotSubmitted] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const submitIssue = () => {
    setSubmissions([...submissions, inputValue]);
    setInputValue("");
    setIsCommitNotSubmitted(false);
    togglePopup()
  };

  return (
    <div className="popup">
      {isCommitNotSubmitted? (
        <div className="popup-content">
          <span className="close-button" onClick={togglePopup}>&times;</span>
          <h2>Issue Details</h2>
          <input type="text" placeholder="Enter issue details" value={inputValue} onChange={handleInputChange} />
          <button className="submit-button" onClick={submitIssue}>Submit</button>
        </div>
      ):null}
    </div>
  );
}
