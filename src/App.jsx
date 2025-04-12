import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import PatientListPage from './pages/PatientListPage';
import DashboardPage from './pages/DashboardPage';
import MessagesPage from './pages/MessagesPage';
import History from './pages/History';
import PatientHistoryPage from './pages/PatientHistoryPage';
import DetailedHistoryPage from './pages/DetailedHistoryPage';
import CommunicationPage from './pages/CommunicationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Default route */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/patients" element={<PatientListPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/patient-history" element={<PatientHistoryPage />} />
          <Route path="/detailed-history" element={<DetailedHistoryPage />} />
          <Route path="/communication" element={<CommunicationPage />} /> {/* Add this */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;