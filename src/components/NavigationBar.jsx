import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/followupcallform">Follow Up Call Form</Link>
            <Link to="/generalinformationform"> General Information Form </Link>
            <Link to="/medicationalcounseling"> Medicational Counseling </Link>
            <Link to="/loginpage"> Login </Link>
            <Link to="/patientdatetable">Patient Data Table</Link>
          </div>
        </div>
    </nav>
  );
};

export default NavigationBar;
