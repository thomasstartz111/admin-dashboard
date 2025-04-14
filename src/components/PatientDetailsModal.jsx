import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DailyReviewModal from './DailyReviewModal';
import EvaluationDetailsTable from './EvaluationDetailsTable';
import { diffWords } from 'diff';

const PatientDetailsModal = ({ patient, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const navigate = useNavigate();
  const [editedClinicalNote, setEditedClinicalNote] = useState(patient.clinicalNote || ''); // Provide a default value



  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      onClose();
    }
  };

  const openPatientChart = () => {
    window.open(`/patient-chart/${patient.id}`, '_blank');
  };

  const handleTextChange = (e) => {
    setEditedClinicalNote(e.target.value);
  };

  const getHighlightedText = (originalText, editedText) => {
    if (typeof originalText !== 'string' || typeof editedText !== 'string') {
      return <span>No text available</span>;
    }

    const diff = diffWords(originalText, editedText);
    return diff.map((part, index) => {
      if (part.added) {
        return (
          <span key={index} className="text-blue-600">
            {part.value}
          </span>
        );
      } else if (part.removed) {
        return (
          <span key={index} className="text-red-600 line-through">
            {part.value}
          </span>
        );
      } else {
        return <span key={index}>{part.value}</span>;
      }
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

        {/* Patient Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{patient.name}</h2>
          <p className="text-sm text-gray-600">
            <strong>ID:</strong> {patient.id} | <strong>DOB:</strong> {patient.dob} | <strong>Age:</strong> {patient.age}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Hospital:</strong> {patient.hospital} | <strong>Admission Date:</strong> {patient.admitDate} | <strong>LOS:</strong> {patient.los} days
          </p>
          <p className="text-sm text-gray-600">
            <strong>Primary Diagnosis:</strong> {patient.primaryDx} | <strong>Discharge Planning:</strong> {patient.dischargePlanning}
          </p>
          <p className="text-sm text-gray-600">
            <strong>LOB:</strong> {patient.lob} | <strong>AI Review:</strong> {patient.aiReview}
          </p>
        </div>

        {/* Patient Chart Button */}
        <div className="mb-6">
          <button
            onClick={openPatientChart}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Patient Chart
          </button>
        </div>

        {/* Clinical Note AI Summary */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Clinical Note AI Summary</h3>
          <div className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-800">
            <strong>Clinical Overview:</strong>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-800"
              value={editedClinicalNote}
              onChange={handleTextChange}
            />
            <div className="mt-2">
              <p>{getHighlightedText(patient.clinicalNote, editedClinicalNote)}</p>
            </div>
          </div>
        </div>

        {/* AI Review Summary */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">AI Review Summary</h3>
          <div className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-800">
            <strong>Review Summary:</strong>
            <p>
              The patient definitively meets the overall criteria for Pneumonia, supported by Subset 1 and Subset 2.
            </p>
          </div>
        </div>

        {/* Evaluation Details Table */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Evaluation Details</h3>
          <EvaluationDetailsTable evaluationData={evaluationData} />
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