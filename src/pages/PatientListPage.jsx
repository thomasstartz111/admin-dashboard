import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientDetailsModal from '../components/PatientDetailsModal';
import patientsData from '../data/patients.json'; // Import the JSON file

const PatientListPage = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPatients(patientsData); // Load patients from JSON
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Patient List</h1>

      {/* Patient Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Hospital Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Admission Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">LOS</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Next Review</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Primary Dx</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Discharge Planning</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">LOB</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">AI Review</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Review Chart</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-4 py-2 text-sm text-gray-800">{patient.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.hospital}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.type}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.admitDate}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.los} days</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.nextReview}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.primaryDx}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.dischargePlanning}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.lob}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{patient.aiReview}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => {
                      console.log('Selected Patient:', patient); // Debugging
                      setSelectedPatient(patient); // Opens the modal
                    }}
                  >
                    Review Chart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)} // Close modal
        />
      )}
    </div>
  );
};

export default PatientListPage;