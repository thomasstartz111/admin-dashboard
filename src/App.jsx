import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PatientListPage from './pages/PatientListPage';
import CommunicationPage from './pages/CommunicationPage';
import MessagesPage from './pages/MessagesPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientListPage />} />
          <Route path="/communication" element={<CommunicationPage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;