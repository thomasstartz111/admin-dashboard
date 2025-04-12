import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailedHistoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { patient } = location.state || {};

  if (!patient) {
    return <p className="p-6">No patient data available.</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{patient.name}'s Full History</h1>
      <p className="text-gray-600 mb-4">Diagnosis: {patient.diagnosis}</p>
      <p className="text-gray-600 mb-4">Hospital: {patient.hospital}</p>
      <p className="text-gray-600 mb-4">AI Analysis: {patient.aiAnalysis}</p>

      <h2 className="text-xl font-bold text-gray-800 mb-2">Daily Reviews</h2>
      <ul className="list-disc pl-6">
        {patient.dailyReviews.map((review, index) => (
          <li key={index} className="mb-2">
            <strong>Day {review.day}:</strong> {review.summary}
            <p className="text-gray-600">{review.details}</p>
          </li>
        ))}
      </ul>

      <button
        className="text-blue-600 hover:text-blue-800 mt-4"
        onClick={() => navigate('/detailed-history', { state: { patient } })}
      >
        View Full History
      </button>
    </div>
  );
};

export default DetailedHistoryPage;