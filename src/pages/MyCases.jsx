import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyCases() {
  const navigate = useNavigate();

  const patients = [
    {
      id: 1,
      name: 'Robert Williams',
      hospital: 'Northeastern Health',
      admitDate: '04/02/2025',
      diagnosis: 'Congestive Heart Failure',
    },
    {
      id: 2,
      name: 'Jane Doe',
      hospital: 'City General Hospital',
      admitDate: '03/28/2025',
      diagnosis: 'Pneumonia',
    },
    {
      id: 3,
      name: 'John Smith',
      hospital: 'Westside Medical Center',
      admitDate: '04/01/2025',
      diagnosis: 'Diabetes Complications',
    },
  ];

  const handleRowClick = (patientId) => {
    // Navigate to the "Main Content" page with the patient's ID
    navigate(`/main-content/${patientId}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Cases</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Hospital</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Admit Date</th>
            <th style={{ border: '1px solid #ddd', padding: '10px' }}>Diagnosis</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              style={{ cursor: 'pointer' }}
              onClick={() => handleRowClick(patient.id)}
            >
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{patient.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{patient.hospital}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{patient.admitDate}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{patient.diagnosis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyCases;