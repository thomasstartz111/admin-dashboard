import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UMCaseReview = () => {
  const { caseId } = useParams();

  // Sample patient data
  const patientData = {
    id: caseId || 'C005',
    name: 'Thomas Wilson',
    mrn: '763492',
    dob: '05/12/1958',
    age: '66y',
    room: '4W-238',
    attendingPhysician: 'Dr. Chen, L.',
    admittedDate: '04/02/2025 14:26',
    insurance: 'Northeastern Health',
    plan: 'Premium PPO',
    status: 'Pending Review',
    currentDay: 6,
    diagnosis: 'Heart Failure',
    hospital: 'County Hospital',
    type: 'DRG',
  };

  // Sample medical necessity data
  const medicalNecessityData = [
    { day: 1, status: 'Approved', criteria: ['Acute HF', 'IV Therapy', 'O2 Support'] },
    { day: 2, status: 'Approved', criteria: ['Acute HF', 'IV Therapy', 'O2 Support'] },
    { day: 3, status: 'Approved', criteria: ['Acute HF', 'IV Therapy', 'O2 Support'] },
    { day: 4, status: 'Approved', criteria: ['Acute HF', 'IV Therapy', 'Renal Mgmt'] },
    { day: 5, status: 'Approved', criteria: ['Acute HF', 'IV Therapy', 'Improving'] },
    { day: 6, status: 'Pending', criteria: ['Acute HF', 'Pending Consult', 'Transition'] },
  ];

  // AI summary
  const aiSummary = `Robert Williams is a 66-year-old male with history of congestive heart failure, hypertension, type 2 diabetes, and stage 3 chronic kidney disease. He presented to the emergency department on April 2, 2025 with increasing dyspnea, orthopnea, and peripheral edema. Initial evaluation revealed acute decompensated heart failure with pulmonary edema and evidence of volume overload. The patient was admitted for IV diuresis and medical management.`;

  const dischargeNotes = `Mr. Williams is showing clinical improvement but several important factors need to be addressed before discharge planning can proceed. The cardiology consultation scheduled for Day 6 will be critical in determining readiness for transition to oral diuretics. Additionally, his renal function, while improving, needs monitoring as he has underlying CKD Stage 3. The patient will likely require home oxygen setup, medication reconciliation, and close follow-up with both cardiology and nephrology within 7 days post-discharge to prevent readmission.`;

  // State for active tab
  const [activeTab, setActiveTab] = useState('summary');

  // State for selected day
  const [selectedDay, setSelectedDay] = useState(6);

  // Function to get badge color based on status
  const getBadgeColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Denied':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  // Function to get criteria pill color
  const getCriteriaPillColor = (criterion) => {
    if (criterion.includes('Pending') || criterion.includes('Transition') || criterion.includes('Improving')) {
      return 'bg-orange-100 text-orange-800';
    }
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Patient Header */}
      <div className="bg-white shadow-sm p-4 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{patientData.name}</h1>
            <p className="text-sm text-gray-600">
              MRN: {patientData.mrn} | DOB: {patientData.dob} ({patientData.age}) | Room: {patientData.room} | Attending: {patientData.attendingPhysician}
            </p>
            <p className="text-sm text-gray-600">
              Admitted: {patientData.admittedDate} | Insurance: {patientData.insurance} | Plan: {patientData.plan}
            </p>
          </div>
          <div className="text-right">
            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getBadgeColor(patientData.status)}`}>
              {patientData.status}
            </div>
            <p className="text-sm text-gray-600 mt-1">Day {patientData.currentDay} of Stay</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-sm mb-4">
        <div className="flex border-b">
          {['summary', 'chart', 'timeline', 'messages', 'discharge', 'documentation'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="bg-white shadow-sm p-4 mb-4 overflow-x-auto">
        <div className="flex space-x-10 min-w-max">
          {medicalNecessityData.map((day) => (
            <div
              key={day.day}
              className={`flex flex-col items-center cursor-pointer ${
                selectedDay === day.day ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedDay(day.day)}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  day.status === 'Approved'
                    ? 'bg-green-600 text-white'
                    : day.status === 'Pending'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {day.day}
              </div>
              <span className="text-xs text-gray-600 mt-1">Day {day.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-sm p-4 mb-4">
        {activeTab === 'summary' && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Patient Summary</h2>
            <div className="bg-yellow-50 p-4 rounded-md mb-4">
              <h3 className="font-semibold text-blue-900 mb-2">Patient Overview</h3>
              <p className="text-sm text-gray-700">{aiSummary}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-orange-500">
              <h3 className="font-semibold text-blue-900 mb-2">Discharge Planning & Care Coordination</h3>
              <p className="text-sm text-gray-700">{dischargeNotes}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UMCaseReview;