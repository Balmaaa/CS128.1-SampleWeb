import React, { useState } from 'react';
import axios from 'axios';
import './PatientDataTable.css';
import NavigationBar from '../components/NavigationBar';

const initialData = [
  { id: 1, name: 'Marxel Abogado', email: 'john@example.com', phone: '09AA AAA AAAA' },
  { id: 2, name: 'Jamilene Tan', email: 'jane@example.com', phone: '09BB BBB BBBB' },
  { id: 3, name: 'Emiel Magante', email: 'alice@example.com', phone: '09CC CCC CCCC' },
  { id: 4, name: 'Gabriel Balmaceda', email: 'gsbalmaceda@up.edu.ph', phone: '09XX XXX XXXX' },
  { id: 5, name: 'Test Dummy 1', email: 'charlie@example.com', phone: '09ZZ ZZZ ZZZZ' }
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
        <NavigationBar/>
        <div className="table-container">
        <h1>Patient Data Table</h1>
        <table>
            <thead>
            <tr>
                <th>Select</th>
                <th onClick={() => handleSort('name')} className={sortConfig.key === 'name' ? sortConfig.direction : ''}>Name</th>
                <th onClick={() => handleSort('email')} className={sortConfig.key === 'email' ? sortConfig.direction : ''}>Email</th>
                <th onClick={() => handleSort('phone')} className={sortConfig.key === 'phone' ? sortConfig.direction : ''}>Phone</th>
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
                <td className="name">{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
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
