import React, { useState } from 'react';
import axios from 'axios';
import './PatientDataTable.css';
import NavigationBar from '../components/NavigationBar';

const initialData = [
  { id: 1, name: 'Test Dummy 1', email: 'XXXXX@example.com', phone: '09AA AAA AAAA', address: '123 Saging St', age: 30, gender: 'Male', dateOfBirth: '1994-01-01', status: 'Active', notes: 'N/A' },
  { id: 2, name: 'Test Dummy 2', email: 'XXXXX@example.com', phone: '09BB BBB BBBB', address: '456 Saging St', age: 28, gender: 'Female', dateOfBirth: '1996-02-02', status: 'Inactive', notes: 'N/A' },
  { id: 3, name: 'Test Dummy 3', email: 'XXXXX@example.com', phone: '09CC CCC CCCC', address: '789 Saging St', age: 35, gender: 'Female', dateOfBirth: '1989-03-03', status: 'Active', notes: 'N/A' },
  { id: 4, name: 'Test Dummy 4', email: 'XXXXX@example.com', phone: '09DD DDD DDDD', address: '101 Saging St', age: 40, gender: 'Male', dateOfBirth: '1984-04-04', status: 'Active', notes: 'N/A' },
  { id: 5, name: 'Test Dummy 5', email: 'XXXXX@example.com', phone: '09EE EEE EEEE', address: '202 Saging St', age: 25, gender: 'Male', dateOfBirth: '1999-05-05', status: 'Inactive', notes: 'N/A' },
  { id: 6, name: 'Test Dummy 6', email: 'XXXXX@example.com', phone: '09FF FFF FFFF', address: '123 Saging St', age: 30, gender: 'Male', dateOfBirth: '1994-01-01', status: 'Active', notes: 'N/A' },
  { id: 7, name: 'Test Dummy 7', email: 'XXXXX@example.com', phone: '09GG GGG GGGG', address: '456 Saging St', age: 28, gender: 'Female', dateOfBirth: '1996-02-02', status: 'Inactive', notes: 'N/A' },
  { id: 8, name: 'Test Dummy 8', email: 'XXXXX@example.com', phone: '09HH HHH HHH', address: '789 Saging St', age: 35, gender: 'Female', dateOfBirth: '1989-03-03', status: 'Active', notes: 'N/A' },
  { id: 9, name: 'Test Dummy 9', email: 'XXXXX@example.com', phone: '09II III III', address: '101 Saging St', age: 40, gender: 'Male', dateOfBirth: '1984-04-04', status: 'Active', notes: 'N/A' },
  { id: 10, name: 'Test Dummy 10', email: 'XXXXX@example.com', phone: '09JJ JJJ JJJJ', address: '202 Saging St', age: 25, gender: 'Male', dateOfBirth: '1999-05-05', status: 'Inactive', notes: 'N/A' },
];

const PatientDataTable = () => {
  const [data, setData] = useState(initialData);
  const [selectedIds, setSelectedIds] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const handleCheckboxChange = (id) => {
    setSelectedIds(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(item => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleSendEmail = () => {
    const selectedPeople = data.filter(person => selectedIds.includes(person.id));
    
    selectedPeople.forEach(person => {
      axios.post('/api/send-email', { email: person.email })
        .then(response => console.log('Email sent:', response))
        .catch(error => console.error('Error sending email:', error));
    });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <div>
        <NavigationBar />
        <div className="table-container">
          <h1>Patient Data Table</h1>
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th onClick={() => handleSort('name')} className={sortConfig.key === 'name' ? sortConfig.direction : ''}>Name</th>
                <th onClick={() => handleSort('email')} className={sortConfig.key === 'email' ? sortConfig.direction : ''}>Email</th>
                <th onClick={() => handleSort('phone')} className={sortConfig.key === 'phone' ? sortConfig.direction : ''}>Phone</th>
                <th onClick={() => handleSort('address')} className={sortConfig.key === 'address' ? sortConfig.direction : ''}>Address</th>
                <th onClick={() => handleSort('age')} className={sortConfig.key === 'age' ? sortConfig.direction : ''}>Age</th>
                <th onClick={() => handleSort('gender')} className={sortConfig.key === 'gender' ? sortConfig.direction : ''}>Gender</th>
                <th onClick={() => handleSort('dateOfBirth')} className={sortConfig.key === 'dateOfBirth' ? sortConfig.direction : ''}>Date of Birth</th>
                <th onClick={() => handleSort('status')} className={sortConfig.key === 'status' ? sortConfig.direction : ''}>Status</th>
                <th onClick={() => handleSort('notes')} className={sortConfig.key === 'notes' ? sortConfig.direction : ''}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map(person => (
                <tr key={person.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(person.id)}
                      onChange={() => handleCheckboxChange(person.id)}
                    />
                  </td>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.address}</td>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>
                  <td>{person.dateOfBirth}</td>
                  <td>{person.status}</td>
                  <td>{person.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
    </div>
  );
};

export default PatientDataTable;
