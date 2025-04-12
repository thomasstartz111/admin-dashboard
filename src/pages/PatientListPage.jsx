import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaComments } from 'react-icons/fa'; // For the communication icon
import PatientDetailsModal from '../components/PatientDetailsModal';
import patientsData from '../data/patients.json';

const PatientListPage = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterHospital, setFilterHospital] = useState('All');
  const [filterDiagnosis, setFilterDiagnosis] = useState('All');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [setFilteredPatients] = useState(patientsData);
  const navigate = useNavigate();

  // Example: Filter patients by status
  const handleFilterStatus = (status) => {
    if (status === 'All') {
      setFilteredPatients(patientsData);
    } else {
      setFilteredPatients(patientsData.filter((patient) => patient.status === status));
    }
  };

  // Filter patients based on selected filters
  const filteredPatients = patientsData.filter((patient) => {
    const matchesStatus = filterStatus === 'All' || patient.status === filterStatus;
    const matchesHospital = filterHospital === 'All' || patient.hospital === filterHospital;
    const matchesDiagnosis = filterDiagnosis === 'All' || patient.diagnosis === filterDiagnosis;
    return matchesStatus && matchesHospital && matchesDiagnosis;
  });

  // Function to determine the color of the AI Review column
  const getAIReviewColor = (review) => {
    switch (review) {
      case 'Definitively Does Not Meet':
        return 'bg-red-500 text-white';
      case 'Likely Does Not Meet':
        return 'bg-red-300 text-white';
      case 'Indeterminate':
        return 'bg-yellow-300 text-black';
      case 'Likely Meets':
        return 'bg-green-300 text-black';
      case 'Definitively Meets':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to handle communication icon click
  const handleCommunicationClick = (patient) => {
    navigate('/communication', {
      state: {
        nurse: patient.nurse,
        physician: patient.physician,
        patient,
      },
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Patient List</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          onChange={(e) => handleFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Statuses</option>
          <option value="Pending Review">Pending Review</option>
          <option value="Approved">Approved</option>
          <option value="Denied">Denied</option>
        </select>

        <select
          value={filterHospital}
          onChange={(e) => setFilterHospital(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Hospitals</option>
          <option value="Northeastern Health">Northeastern Health</option>
          <option value="City General Hospital">City General Hospital</option>
          <option value="Westside Medical Center">Westside Medical Center</option>
        </select>

        <select
          value={filterDiagnosis}
          onChange={(e) => setFilterDiagnosis(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Diagnoses</option>
          <option value="Congestive Heart Failure">Congestive Heart Failure</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Diabetes Complications">Diabetes Complications</option>
          <option value="Hypertension">Hypertension</option>
          <option value="Asthma">Asthma</option>
        </select>
      </div>

      {/* Patient Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Chat</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">AI Review</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">MRN</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Reviewing Day</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Hospital</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Admit Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Diagnosis</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">LOS</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Primary Barrier</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">LOB</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td
                  className="px-4 py-2 text-sm text-blue-500 cursor-pointer hover:underline"
                  onClick={() => setSelectedPatient(patient)}
                >
                  {patient.name}
                </td>
                <td className="px-4 py-2 text-center">
                  <FaComments
                    className="text-blue-500 text-xl cursor-pointer hover:text-blue-700"
                    onClick={() => handleCommunicationClick(patient)}
                  />
                </td>
                <td
                  className={`px-2 py-1 text-sm text-center rounded-full ${getAIReviewColor(
                    patient.aiReview
                  )}`}
                >
                  {patient.aiReview}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.mrn}</td>
                <td className="px-4 py-2 text-sm text-center">Day {patient.reviewingDay}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.hospital}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.admitDate}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.diagnosis}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'Approved'
                        ? 'bg-green-100 text-green-800'
                        : patient.status === 'Pending Review'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.los}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.primaryBarrier}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.lob}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
};

export default PatientListPage;