import React from 'react';

function Sidebar() {
  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        backgroundColor: '#002855',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <h2 style={{ marginBottom: '20px', fontSize: '18px' }}>UM Reviews</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          style={{
            backgroundColor: '#FF7F11',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          My Cases
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          Team Queue
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          Pending Discharge
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          Denied Cases
        </button>
        <button
          style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          Reports
        </button>
      </div>
      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
        <button
          style={{
            backgroundColor: '#FF7F11',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Daisy AI
        </button>
      </div>
    </div>
  );
}

export default Sidebar;