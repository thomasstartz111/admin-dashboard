import React, { useState } from 'react';

const PatientHistoryPage = () => {
  const [filter, setFilter] = useState('');
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      diagnosis: 'Congestive Heart Failure',
      hospital: 'Northeastern Health',
      aiAnalysis: 'Likely Meets',
      dailyReviews: [
        { day: 1, summary: 'Stable condition', details: 'Patient is responding well to treatment.' },
        { day: 2, summary: 'Improved vitals', details: 'Blood pressure and heart rate are normal.' },
      ],
    },
    // Add more patients here...
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Patient History</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search by patient name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded-md shadow-sm mb-4"
      />

      {/* Patient Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Diagnosis</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Hospital</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">AI Analysis</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td className="px-4 py-2 text-sm text-gray-800">{patient.name}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{patient.diagnosis}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{patient.hospital}</td>
              <td className="px-4 py-2 text-sm text-gray-800">{patient.aiAnalysis}</td>
              <td className="px-4 py-2 text-sm">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => console.log('Expand daily reviews')}
                >
                  View Daily Reviews
                </button>
                <button
                  className="ml-4 text-purple-600 hover:text-purple-800"
                  onClick={() => console.log('Navigate to detailed history')}
                >
                  View Full History
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientHistoryPage;