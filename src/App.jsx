import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MyCases from './pages/MyCases';
import MainContent from './pages/MainContent';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/my-cases" element={<MyCases />} />
              <Route path="/main-content/:patientId" element={<MainContent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;