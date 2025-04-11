import React from 'react';

function MainContent() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', height: '100%', overflowY: 'auto' }}>
      {/* Patient Header */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Williams, Robert J.</h2>
        <p>
          <strong>MRN:</strong> 763492 | <strong>DOB:</strong> 05/12/1958 (66y) | <strong>Room:</strong> 4W-238 |{' '}
          <strong>Attending:</strong> Dr. Chen, L.
        </p>
        <p>
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
        <h3>Patient Summary</h3>
        <div
          style={{
            backgroundColor: '#fffbea',
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            border: '1px solid #f0e68c',
          }}
        >
          <strong>Patient Overview:</strong>
          <p>
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
            <h4>Medical Necessity Status</h4>
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
            <h4>Prior Authorization Requirements</h4>
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