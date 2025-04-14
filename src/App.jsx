import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import PatientListPage from './pages/PatientListPage';
import DashboardPage from './pages/DashboardPage';
import MessagesPage from './pages/MessagesPage';
import History from './pages/History';
import PatientHistoryPage from './pages/PatientHistoryPage';
import DetailedHistoryPage from './pages/DetailedHistoryPage';
import CommunicationPage from './pages/CommunicationPage';
import PatientChartPage from './pages/PatientChartPage'; // Import the new page
import PatientDetailsModal from './components/PatientDetailsModal'; // Import the modal

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedPatient, setSelectedPatient] = useState(null); // State to hold selected patient data

  const handleOpenModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  return (
    <Router>
      <Header />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Default route */}
          <Route path="/dashboard" element={<DashboardPage onPatientClick={handleOpenModal} />} />
          <Route path="/patients" element={<PatientListPage onPatientClick={handleOpenModal} />} />
          <Route path="/patient-chart/:id" element={<PatientChartPage />} /> {/* New route */}
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/patient-history" element={<PatientHistoryPage />} />
          <Route path="/detailed-history" element={<DetailedHistoryPage />} />
          <Route path="/communication" element={<CommunicationPage />} /> {/* Add this */}
        </Routes>
      </div>

      {/* Render the PatientDetailsModal if the modal is open */}
      {isModalOpen && selectedPatient && (
        <PatientDetailsModal patient={selectedPatient} onClose={handleCloseModal} />
      )}
    </Router>
  );
};

export default App;