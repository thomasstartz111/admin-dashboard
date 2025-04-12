import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PatientDetailsModal from '../components/PatientDetailsModal';

const PatientListPage = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterHospital, setFilterHospital] = useState('All');
  const [filterDiagnosis, setFilterDiagnosis] = useState('All');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Mock patient data
  const patients = [
    { id: 1, name: 'Robert Williams', hospital: 'Northeastern Health', admitDate: '04/02/2025', diagnosis: 'Congestive Heart Failure', status: 'Pending Review', los: 6, primaryBarrier: 'Awaiting Placement', lob: 'Commercial' },
    { id: 2, name: 'Jane Doe', hospital: 'City General Hospital', admitDate: '03/28/2025', diagnosis: 'Pneumonia', status: 'Approved', los: 3, primaryBarrier: 'Insurance Approval', lob: 'Medicare' },
    { id: 3, name: 'John Smith', hospital: 'Westside Medical Center', admitDate: '04/01/2025', diagnosis: 'Diabetes Complications', status: 'Denied', los: 10, primaryBarrier: 'Rehab Bed Availability', lob: 'Medicaid' },
    ...Array.from({ length: 17 }, (_, i) => ({
      id: i + 4,
      name: `Patient ${i + 4}`,
      hospital: i % 2 === 0 ? 'Northeastern Health' : 'City General Hospital',
      admitDate: `04/${String(i + 10).padStart(2, '0')}/2025`,
      diagnosis: i % 2 === 0 ? 'Hypertension' : 'Asthma',
      status: i % 3 === 0 ? 'Pending Review' : i % 3 === 1 ? 'Approved' : 'Denied',
      los: Math.floor(Math.random() * 20) + 1,
      primaryBarrier: i % 2 === 0 ? 'Awaiting Placement' : 'Insurance Approval',
      lob: i % 2 === 0 ? 'Commercial' : 'Medicare',
    })),
  ];

  // Filter patients based on selected filters
  const filteredPatients = patients.filter((patient) => {
    const matchesStatus = filterStatus === 'All' || patient.status === filterStatus;
    const matchesHospital = filterHospital === 'All' || patient.hospital === filterHospital;
    const matchesDiagnosis = filterDiagnosis === 'All' || patient.diagnosis === filterDiagnosis;
    return matchesStatus && matchesHospital && matchesDiagnosis;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Patient List</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
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