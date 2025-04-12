import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const CommunicationPage = () => {
  const location = useLocation();
  const { nurse, physician, patient } = location.state || {};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Communication Details</h2>

      {/* Nurse Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Main Communication Nurse</h3>
        <p>
          <strong>Name:</strong> {nurse?.name || 'N/A'}
        </p>
        <p>
          <strong>Phone:</strong> {nurse?.phone || 'N/A'}
        </p>
      </div>

      {/* Physician Details */}
      <div className="mb-4">
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
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </div>

      {/* View Messages Chip */}
      <div className="mt-6">
        <Link to="/messages">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200">
            View Messages
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CommunicationPage;