import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DailyReviewModal = ({ day, review, onClose }) => {
  const [summary, setSummary] = useState(review?.summary || '');
  const [details, setDetails] = useState(review?.details || '');
  const navigate = useNavigate();

  const handleSave = () => {
    // Save the review (e.g., send to API or update state)
    console.log(`Saving review for Day ${day}:`, { summary, details });
    onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-background"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold mb-4">Daily Review - Day {day}</h3>

        {/* Summary */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Summary</h4>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter summary for this day..."
          ></textarea>
        </div>

        {/* Details */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Details</h4>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter detailed review for this day..."
          ></textarea>
        </div>

    

        <div className="flex justify-left mt-4">
          <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => navigate('/history')} // Navigate to the History Page
          >
            History Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyReviewModal;