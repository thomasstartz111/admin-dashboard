import React from 'react';

const PatientDetailsCard = ({ patient }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">{patient.name}</h2>
      <p className="text-sm text-gray-600">
        <strong>MRN:</strong> {patient.mrn}
      </p>
      <p className="text-sm text-gray-600">
        <strong>DOB:</strong> {patient.dob} ({patient.age})
      </p>
      <p className="text-sm text-gray-600">
        <strong>Status:</strong> {patient.status}
      </p>
    </div>
  );
};

export default PatientDetailsCard;