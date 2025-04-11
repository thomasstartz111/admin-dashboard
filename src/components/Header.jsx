import React from 'react';

function Header() {
  return (
    <div
      style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '24px' }}>Admin Dashboard</h1>
    </div>
  );
}

export default Header;
