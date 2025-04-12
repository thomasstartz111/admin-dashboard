import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MedicalNecessityReview from '../components/MedicalNecessityReview';

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

  // Sample criteria details for day 6
  const day6Criteria = [
    {
      id: 1,
      title: 'CRITERIA SET 1: ACUTE HEART FAILURE',
      status: 'MET',
      items: [
        { criterion: 'Ongoing clinical evidence of fluid overload', status: 'Met', evidence: 'Patient continues to exhibit peripheral edema +1 bilaterally', quote: 'CXR 2V: Bilat patchy opacities, R>L. Perihilar & basal predominance.' },
        { criterion: 'BNP > 500 pg/mL', status: 'Met', evidence: 'Current BNP is 980 pg/mL', quote: 'Lab Results (Day 6): BNP 980 pg/mL (↓ from 1250 pg/mL on Day 5)' },
        { criterion: 'Requiring supplemental oxygen', status: 'Met', evidence: 'Patient continues to require 2L NC oxygen', quote: 'Current oxygen requirements: 2L NC, maintaining O2 sat 93-95% at rest' }
      ]
    },
    {
      id: 2,
      title: 'CRITERIA SET 2: ACTIVE TREATMENT',
      status: 'MET',
      items: [
        { criterion: 'IV diuretic therapy with documented response', status: 'Met', evidence: 'Patient receiving IV Lasix 40mg BID with documented diuresis', quote: 'IV Lasix 40mg BID. Last 24hr I/O: Input 1800mL, Output 3000mL.' },
        { criterion: 'Daily provider assessment and management', status: 'Met', evidence: 'Daily progress notes documenting assessment', quote: 'Provider Note (Day 6): Patient showing gradual improvement. Continuing IV diuresis.' },
        { criterion: 'Active titration of cardiac medications', status: 'Met', evidence: 'Medication adjustments documented', quote: 'Medication Orders: Carvedilol increased from 6.25mg BID to 12.5mg BID on Day 5' }
      ]
    },
    {
      id: 3,
      title: 'CRITERIA SET 3: CONTINUED STAY',
      status: 'PARTIALLY MET',
      items: [
        { criterion: 'Documented complications', status: 'Met', evidence: 'Patient has underlying CKD Stage 3', quote: 'Renal function: Cr improved to 1.7 mg/dL (from 2.3 mg/dL on admission)' },
        { criterion: 'Unable to transition to oral diuretics', status: 'Pending Evaluation', evidence: 'Cardiology consultation scheduled today', quote: 'Consult scheduled: Cardiology, Dr. Patel, 2:00 PM today' },
        { criterion: 'Cardiology recommendations', status: 'Missing', evidence: 'Not yet available', quote: 'No documentation available yet for cardiology consult.' }
      ]
    }
  ];

  // AI summary
  const aiSummary = `Robert Williams is a 66-year-old male with history of congestive heart failure, hypertension, type 2 diabetes, and stage 3 chronic kidney disease. He presented to the emergency department on April 2, 2025 with increasing dyspnea, orthopnea, and peripheral edema. Initial evaluation revealed acute decompensated heart failure with pulmonary edema and evidence of volume overload. The patient was admitted for IV diuresis and medical management.`;

  const dischargeNotes = `Mr. Williams is showing clinical improvement but several important factors need to be addressed before discharge planning can proceed. The cardiology consultation scheduled for Day 6 will be critical in determining readiness for transition to oral diuretics. Additionally, his renal function, while improving, needs monitoring as he has underlying CKD Stage 3. The patient will likely require home oxygen setup, medication reconciliation, and close follow-up with both cardiology and nephrology within 7 days post-discharge to prevent readmission.`;

  // State for active tab
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Patient Header */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{patientData.name}</h1>
            <p className="text-sm text-gray-600">
              MRN: {patientData.mrn} | DOB: {patientData.dob} ({patientData.age}) | Room: {patientData.room} | Attending: {patientData.attendingPhysician}
            </p>
            <p className="text-sm text-gray-600">
              Admitted: {patientData.admittedDate} | Insurance: {patientData.insurance} | Plan: {patientData.plan}
            </p>
          </div>
          <div className="text-right">
            <div className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-300">
              {patientData.status}
            </div>
            <p className="text-sm text-gray-600 mt-1">Day {patientData.currentDay} of Stay</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
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

      {/* Medical Necessity Review */}
      <MedicalNecessityReview
        medicalNecessityData={medicalNecessityData}
        dayCriteriaDetails={day6Criteria}
      />
    </div>
  );
};

export default UMCaseReview;