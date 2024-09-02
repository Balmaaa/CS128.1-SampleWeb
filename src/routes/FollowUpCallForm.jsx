import React, { useState } from 'react';
import './Form_1.css';

const FollowUpCallForm = () => {
  const [formData, setFormData] = useState({
    Record_ID: '',
    Name_ID: '',
    HRN_ID: '',
    ContactNumber_ID: '',
    Address_ID: '',
    Diagnosis_ID: '',
    DateOfDischarge_ID: '',
    DateOfCall_ID: '',
    CallsAnswered_ID: '',


    
    likertScale: '',
    multipleChoice: '',
    yesNo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="form-container">
      <h1> Follow Up Call </h1>
      <form onSubmit={handleSubmit}>

        {/* Question 1: Record ID */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Record_ID"> Record ID: </label>
            <input type="text" id="Record_ID" name="Record_ID" value={formData.Record_ID} onChange={handleChange} placeholder="Enter Record ID"/>
          </div>
        </div>

        {/* Question 2: Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Name_ID"> Name: </label>
            <input type="text" id="Name_ID" name="Name_ID" value={formData.Name_ID} onChange={handleChange} placeholder="Enter Name"/>
          </div>
        </div>

        {/* Question 3 : Hospital Record Number */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="HRN_ID"> Hospital Record Number: </label>
            <input type="text" id="HRN_ID" name="HRN_ID" value={formData.HRN_ID} onChange={handleChange} placeholder="e.g. XXXX XXXX XXXX"/>
          </div>
        </div>

        {/* Question 4 : Contact Number */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ContactNumber_ID"> Contact Number: </label>
            <input type="text" id="ContactNumber_ID" name="ContactNumber_ID" value={formData.ContactNumber_ID} onChange={handleChange} placeholder="e.g. XXXX XXX XXXX"/>
          </div>
        </div>

        {/* Question 5 : Address */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Address_ID"> Contact Number: </label>
            <input type="text" id="Address_ID" name="Address_ID" value={formData.Address_ID} onChange={handleChange} placeholder="Enter Address"/>
          </div>
        </div>

        {/* Question 6 : Diagnosis */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="Diagnosis_ID"> Contact Number: </label>
            <input type="text" id="Diagnosis_ID" name="Diagnosis_ID" value={formData.Diagnosis_ID} onChange={handleChange} placeholder="Enter Address"/>
          </div>
        </div>

        {/* Question 7: Date of Discharge */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="DateOfDischarge_ID">Date of Discharge:</label>
            <input type="date" id="DateOfDischarge_ID" name="DateOfDischarge_ID" value={formData.DateOfDischarge_ID} onChange={handleChange}
            />
          </div>
        </div>

        {/* Question 8: Date of Call */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="DateOfCall_ID">Date of Call:</label>
            <input type="date" id="DateOfCall_ID" name="DateOfCall_ID" value={formData.DateOfCall_ID} onChange={handleChange}/>
          </div>
        </div>

        {/* Question 9: Calls Answered */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="CallsAnswered_ID"> Calls Answered: </label>
            <select id="CallsAnswered_ID" name="CallsAnswered_ID" value={formData.CallsAnswered_ID} onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="option1"> Answered </option>
              <option value="option2"> No Answer After 3 Tries </option>
              <option value="option3"> Incorrect Number </option>
              <option value="option4"> Number Unreachable </option>
            </select>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Row 3: Likert Scale */}
        <div className="form-row">
          <div className="form-group">
            <label>Rate your experience:</label>
            <div className="likert-scale">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                  <input
                    type="radio"
                    name="likertScale"
                    value={num}
                    checked={formData.likertScale === String(num)}
                    onChange={handleChange}
                  />
                  {num}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: Multiple Choice */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="multipleChoice">Select an option:</label>
            <select
              id="multipleChoice"
              name="multipleChoice"
              value={formData.multipleChoice}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

        {/* Row 5: Yes/No */}
        <div className="form-row">
          <div className="form-group">
            <label>Yes/No:</label>
            <div className="yes-no">
              <label>
                <input
                  type="radio"
                  name="yesNo"
                  value="yes"
                  checked={formData.yesNo === 'yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="yesNo"
                  value="no"
                  checked={formData.yesNo === 'no'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FollowUpCallForm;
