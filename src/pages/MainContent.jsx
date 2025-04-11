import React from 'react';
import { useParams } from 'react-router-dom';

function MainContent() {
  const { patientId } = useParams();

  // Mock patient data (in a real app, fetch this data from an API)
  const patients = {
    1: {
      name: 'Robert Williams',
      hospital: 'Northeastern Health',
      admitDate: '04/02/2025',
      diagnosis: 'Congestive Heart Failure',
      details: 'Patient admitted for acute decompensated heart failure. Requires IV diuresis and oxygen support.',
    },
    2: {
      name: 'Jane Doe',
      hospital: 'City General Hospital',
      admitDate: '03/28/2025',
      diagnosis: 'Pneumonia',
      details: 'Patient admitted for severe pneumonia. Requires antibiotics and respiratory therapy.',
    },
    3: {
      name: 'John Smith',
      hospital: 'Westside Medical Center',
      admitDate: '04/01/2025',
      diagnosis: 'Diabetes Complications',
      details: 'Patient admitted for uncontrolled diabetes. Requires insulin therapy and dietary management.',
    },
  };

  const patient = patients[patientId];

  if (!patient) {
    return <div style={{ padding: '20px', fontSize: '18px', color: 'red' }}>Patient not found.</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      {/* Patient Header */}
      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ marginBottom: '10px', color: '#333' }}>{patient.name}</h2>
        <p style={{ margin: '5px 0' }}>
          <strong>MRN:</strong> 763492 | <strong>DOB:</strong> 05/12/1958 (66y) | <strong>Room:</strong> 4W-238 |{' '}
          <strong>Attending:</strong> Dr. Chen, L.
        </p>
        <p style={{ margin: '5px 0' }}>
          <strong>Admitted:</strong> 04/02/2025 14:26 | <strong>Insurance:</strong> Northeastern Health |{' '}
          <strong>Plan:</strong> Premium PPO
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '2px solid #ddd', marginBottom: '20px' }}>
        {['Summary', 'Chart', 'Clinical Timeline', 'Messages', 'Discharge', 'Documentation'].map((tab, index) => (
          <div
            key={index}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              borderBottom: index === 0 ? '3px solid #1976d2' : 'none',
              color: index === 0 ? '#1976d2' : '#333',
              fontWeight: index === 0 ? 'bold' : 'normal',
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Patient Summary */}
      <div>
        <h3 style={{ marginBottom: '15px', color: '#333' }}>Patient Summary</h3>
        <div
          style={{
            backgroundColor: '#fffbea',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #f0e68c',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <strong>Patient Overview:</strong>
          <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
            Robert Williams is a 66-year-old male with a history of congestive heart failure, hypertension, type 2
            diabetes, and stage 3 chronic kidney disease. He presented to the emergency department on April 2, 2025,
            with increasing dyspnea, orthopnea, and peripheral edema. Initial evaluation revealed acute decompensated
            heart failure with pulmonary edema and evidence of volume overload. The patient was admitted for IV diuresis
            and medical management.
          </p>
        </div>

        {/* Medical Necessity Status */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ marginBottom: '10px', color: '#333' }}>Medical Necessity Status</h4>
            <div>
              {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'].map((day, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    padding: '10px',
                    backgroundColor: '#f4f4f4',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <strong style={{ marginRight: '10px' }}>{day}:</strong>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span
                      style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                      }}
                    >
                      Acute HF
                    </span>
                    <span
                      style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                      }}
                    >
                      IV Therapy
                    </span>
                    <span
                      style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                      }}
                    >
                      O2 Support
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prior Authorization Requirements */}
          <div style={{ flex: 1 }}>
            <h4 style={{ marginBottom: '10px', color: '#333' }}>Prior Authorization Requirements</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Home Oxygen:</strong> <span style={{ color: 'red' }}>Authorization Required</span>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  Requires documented O2 sat ≤ 88% at rest or with exertion
                </p>
              </li>
              <li>
                <strong>Cardiac Rehabilitation:</strong> <span style={{ color: 'red' }}>Authorization Required</span>
                <p style={{ margin: 0, fontSize: '14px' }}>
                  36 sessions covered with HF diagnosis
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;