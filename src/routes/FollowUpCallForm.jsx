import React, { useState } from 'react';
import './FollowUpCallForm.css';
import NavigationBar from '../components/NavigationBar';

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
    Diet_ID: '',
    HAYFT_ID: '',
    PainYesNo: '',
    SpecifyPain_ID: '',
    PainScale_ID: '',
    Symptoms_ID:
    {
      Fever: false,
      Nausea: false,
      Vomiting: false,
      DifficultyBreathing: false,
      ChestPain: false,
      Drowsiness: false,
      NoneOfTheAbove: false,
    },

    likertScale: '',
    
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
    <div>
      <NavigationBar/>
      <br></br>
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

          <h2> Home Care Questionnaire </h2>

          {/* Question 10 : Diet */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Diet_ID"> Diet: </label>
              <input type="text" id="Diet_ID" name="Diet_ID" value={formData.Diet_ID} onChange={handleChange} placeholder="Enter Diet"/>
            </div>
          </div>

          {/* Question 11 : Feeling */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="HAYFT_ID"> How Are You Feeling Today? </label>
              <input type="text" id="HAYFT_ID" name="HAYFT_ID" value={formData.HAYFT_ID} onChange={handleChange} placeholder=" Feeling? "/>
            </div>
          </div>

          {/* Question 12 : Pain */}
          <div className="form-row">
            <div className="form-group">
              <label> Do You Experience Any Pain? </label>
              <div className="yes-no">
                <label><input type="radio" name="PainYesNo" value="yes" checked={formData.PainYesNo === 'yes'} onChange={handleChange}/> Yes </label>
                <label><input type="radio" name="PainYesNo" value="no" checked={formData.PainYesNo === 'no'} onChange={handleChange}/> No </label>
              </div>
            </div>
          </div>

          {/* Question 13 : Specify Pain */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="SpecifyPain_ID"> Specify Pain Location </label>
              <input type="text" id="SpecifyPain_ID" name="SpecifyPain_ID" value={formData.SpecifyPain_ID} onChange={handleChange} placeholder=" Location "/>
            </div>
          </div>

          {/* Question 14: Pain Scale */}
          <div className="form-row">
            <div className="form-group">
              <label> Rate Your Experience | 1 - No Pain & 5 - Pain Completely | </label>
              <div className="PainScale_ID">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num}>
                    <input type="radio" name="PainScale_ID" value={num} checked={formData.PainScale_ID === String(num)} onChange={handleChange}/> {num} </label>
                ))}
              </div>
            </div>
          </div>

          {/* Question 15: Symptoms */}
          <div className="form-row">
            <div className="form-group">
              <label>Do You Experience The Following Symptoms?</label>
              <div className="checkbox-group">
                <label><input type="checkbox" name="Fever" checked={formData.Symptoms_ID.Fever} onChange={handleChange}/> Fever </label>
                <label><input type="checkbox" name="Nausea" checked={formData.Symptoms_ID.Nausea} onChange={handleChange}/> Nausea </label>
                <label><input type="checkbox" name="Vomiting" checked={formData.Symptoms_ID.Vomiting} onChange={handleChange}/> Vomiting </label>
                <label><input type="checkbox" name="DifficultyBreathing" checked={formData.Symptoms_ID.DifficultyBreathing} onChange={handleChange}/> Difficulty of Breathing </label>
                <label><input type="checkbox" name="ChestPain" checked={formData.Symptoms_ID.ChestPain} onChange={handleChange}/> Chest Pain </label>
                <label><input type="checkbox" name="Drowsiness" checked={formData.Symptoms_ID.Drowsiness} onChange={handleChange}/> Drowsiness/Difficulty to Arouse </label>
                <label><input type="checkbox" name="NoneOfTheAbove" checked={formData.Symptoms_ID.NoneOfTheAbove} onChange={handleChange}/> None of the Above </label>
              </div>
            </div>
          </div>

          <hr className="section-divider" />

          <h2> Refer For Admission </h2>
          <h3> Work-In-Progress </h3>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FollowUpCallForm;
