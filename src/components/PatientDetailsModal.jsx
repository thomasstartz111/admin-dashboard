import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaComments } from 'react-icons/fa'; // Import the communication icon
import DailyReviewModal from './DailyReviewModal';

const PatientDetailsModal = ({ patient, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      onClose();
    }
  };

  const navigateToPatientChart = () => {
    // Logic to navigate to the patient's complete medical history
    console.log(`Navigating to Patient Chart for ${patient.name}`);
    // Example: window.location.href = `/patient-chart/${patient.id}`;
  };

  const handleCommunicationClick = () => {
    navigate('/communication', {
      state: {
        nurse: { name: 'Nurse Jane Doe', phone: '555-123-4567' },
        physician: { name: 'Dr. John Smith', phone: '555-987-6543' },
        patient,
      },
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-background"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Patient Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {patient.name}
              </h2>
              <p className="text-sm text-gray-600">
                <strong>MRN:</strong> {patient.id} | <strong>DOB:</strong> {patient.dob} ({patient.age}) | <strong>Room:</strong> 4W-238 | <strong>Attending:</strong> Dr. Chen, L.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Admitted:</strong> {patient.admitDate} | <strong>Insurance:</strong> {patient.hospital} | <strong>Plan:</strong> Premium PPO | <strong>LOS:</strong> {patient.los} days | <strong>Hospital:</strong> {patient.hospital} | <strong>Diagnosis:</strong> {patient.diagnosis}
              </p>
            </div>
            <div className="text-left mt-1">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  patient.status === 'Approved'
                    ? 'bg-green-100 text-green-800'
                    : patient.status === 'Pending Review'
                    ? 'bg-orange-100 text-orange-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {patient.status}
              </span>
            </div>
          </div>
        </div>

        {/* Patient Chart Button */}
        <div className="mb-6">
          <button
            onClick={navigateToPatientChart}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Patient Chart
          </button>
        </div>

        {/* Daily Reviews Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Daily Reviews</h3>
          <div className="space-y-2">
            {Array.from({ length: patient.los }, (_, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                <span className="text-sm text-gray-800">
                  <strong>Day {i + 1}:</strong>
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    patient.dailyReviews?.[i]?.status === 'Approved'
                      ? 'bg-green-100 text-green-800'
                      : patient.dailyReviews?.[i]?.status === 'Pending Review'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {patient.dailyReviews?.[i]?.status || 'Pending Review'}
                </span>
                <button
                  onClick={() => setSelectedDay(i + 1)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Utilization Management AI Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Note AI Summary */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Clinical Note AI Summary</h3>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter clinical note AI summary..."
          ></textarea>
        </div>

        {/* AI Review Summary */}
        <div>
          <h3 className="text-lg font-semibold mb-2">AI Review Summary</h3>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Enter AI review summary..."
          ></textarea>
        </div>

     
      {/* Daily Review Modal */}
      {selectedDay && (
        <DailyReviewModal
          day={selectedDay}
          review={patient.dailyReviews?.[selectedDay - 1]}
          onClose={() => setSelectedDay(null)}
        />
    )}
      </div>
    </div>
  );
};

export default PatientDetailsModal;