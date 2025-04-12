import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CommunicationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nurse, physician, patient } = location.state || {};

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Communication Details</h1>

      {/* Patient Details */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Patient: {patient?.name || 'N/A'}</h2>
        <p className="text-gray-600">Diagnosis: {patient?.diagnosis || 'N/A'}</p>
      </div>

      {/* Nurse Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Main Communication Nurse</h3>
        <p>
          <strong>Name:</strong> {nurse?.name || 'N/A'}
        </p>
        <p>
          <strong>Phone:</strong> {nurse?.phone || 'N/A'}
        </p>
      </div>

      {/* Physician Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Patient's Physician</h3>
        <p>
          <strong>Name:</strong> {physician?.name || 'N/A'}
        </p>
        <p>
          <strong>Phone:</strong> {physician?.phone || 'N/A'}
        </p>
      </div>

      {/* Message Portal */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Message Portal</h3>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="Enter your message here..."
        ></textarea>
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Send Message
          </button>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-md border border-blue-500 hover:bg-blue-100"
            onClick={() => navigate('/messages')} // Navigate to the Messages Page
          >
            Message History
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPage;