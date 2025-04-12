import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PatientListPage from './pages/PatientListPage';
import MainContent from './pages/MainContent';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div className="p-6">Welcome to the Dashboard</div>} />
        <Route path="/patients" element={<PatientListPage />} />
        <Route path="/patients/:patientId" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;