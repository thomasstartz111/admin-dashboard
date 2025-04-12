import React, { useState } from 'react';

const MedicalNecessityReview = ({ medicalNecessityData, dayCriteriaDetails }) => {
  // State for selected day and expanded criteria
  const [selectedDay, setSelectedDay] = useState(6);
  const [expandedCriteria, setExpandedCriteria] = useState(null);

  // Function to get badge color based on status
  const getBadgeColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Denied':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  // Get color for criteria header
  const getCriteriaHeaderColor = (status) => {
    switch (status) {
      case 'MET':
        return 'bg-green-600 text-white';
      case 'NOT MET':
        return 'bg-red-600 text-white';
      case 'PARTIALLY MET':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  // Toggle function for expanding/collapsing criteria details
  const toggleCriteria = (id) => {
    if (expandedCriteria === id) {
      setExpandedCriteria(null);
    } else {
      setExpandedCriteria(id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Medical Necessity Review</h2>

      {/* Medical Necessity Status Overview */}
      <div className="bg-gray-50 p-3 rounded-md mb-6">
        {medicalNecessityData.map((day) => (
          <div
            key={day.day}
            className={`flex items-center py-2 cursor-pointer ${
              day.day === selectedDay ? 'bg-blue-50 -mx-3 px-3 rounded-md' : ''
            }`}
            onClick={() => setSelectedDay(day.day)}
          >
            <div className="w-16 font-medium text-gray-700">Day {day.day}:</div>
            <div className="flex flex-wrap gap-2">
              {day.criteria.map((criterion, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {criterion}
                </span>
              ))}
            </div>
            <div className="ml-auto">
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${getBadgeColor(day.status)}`}>
                {day.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Current Day Detailed Criteria Evaluation */}
      <div className="bg-white p-4 rounded-md border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Day {selectedDay} Criteria Evaluation</h3>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${getBadgeColor(
              medicalNecessityData[selectedDay - 1].status
            )}`}
          >
            {medicalNecessityData[selectedDay - 1].status}
          </span>
        </div>

        {dayCriteriaDetails.map((criteriaSet) => (
          <div key={criteriaSet.id} className="mb-4 border border-gray-200 rounded-md overflow-hidden">
            {/* Criteria Header - Clickable */}
            <div
              className={`p-3 ${getCriteriaHeaderColor(criteriaSet.status)} flex justify-between items-center cursor-pointer`}
              onClick={() => toggleCriteria(criteriaSet.id)}
            >
              <span className="font-medium">{criteriaSet.title} - {criteriaSet.status}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${expandedCriteria === criteriaSet.id ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Criteria Details - Expandable */}
            {expandedCriteria === criteriaSet.id && (
              <div className="p-3 bg-gray-50">
                {criteriaSet.items.map((item, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-gray-800">{item.criterion}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          item.status === 'Met'
                            ? 'bg-green-100 text-green-800'
                            : item.status === 'Missing'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{item.evidence}</p>
                    <div className="bg-gray-100 p-2 rounded text-xs text-gray-700 border-l-2 border-blue-600">
                      <div className="flex items-center text-blue-600 text-xs mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>From clinical documentation:</span>
                      </div>
                      "{item.quote}"
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Action buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Approve</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Deny</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Request Documentation</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Schedule Peer-to-Peer</button>
        </div>
      </div>
    </div>
  );
};

export default MedicalNecessityReview;