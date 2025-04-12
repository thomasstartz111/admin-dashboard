import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const DashboardPage = () => {
  // State for filters
  const [selectedHospital, setSelectedHospital] = useState('All');
  const [selectedDiagnosis, setSelectedDiagnosis] = useState('All');

  // Mock data for the charts
  const reviewsByHospitalData = {
    labels: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D'],
    datasets: [
      {
        label: 'Number of Reviews',
        data: [120, 90, 75, 60],
        backgroundColor: ['rgba(76, 175, 80, 0.7)', 'rgba(33, 150, 243, 0.7)', 'rgba(255, 152, 0, 0.7)', 'rgba(244, 67, 54, 0.7)'],
        borderColor: ['#4CAF50', '#2196F3', '#FF9800', '#F44336'],
        borderWidth: 1,
      },
    ],
  };

  const reviewsByDiagnosisData = {
    labels: ['Heart Failure', 'Pneumonia', 'Diabetes', 'Hypertension', 'Asthma'],
    datasets: [
      {
        label: 'Number of Reviews',
        data: [50, 40, 30, 20, 10],
        backgroundColor: ['rgba(33, 150, 243, 0.7)', 'rgba(76, 175, 80, 0.7)', 'rgba(255, 152, 0, 0.7)', 'rgba(244, 67, 54, 0.7)', 'rgba(103, 58, 183, 0.7)'],
        borderColor: ['#2196F3', '#4CAF50', '#FF9800', '#F44336', '#673AB7'],
        borderWidth: 1,
      },
    ],
  };

  const timeSpentTrendData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Time Spent on Reviews (Hours)',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 1), // Random hours between 1 and 5
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        fill: true,
        tension: 0.4, // Smooth the line
      },
    ],
  };

  const handleHospitalFilterChange = (e) => {
    setSelectedHospital(e.target.value);
    // Apply filtering logic here
  };

  const handleDiagnosisFilterChange = (e) => {
    setSelectedDiagnosis(e.target.value);
    // Apply filtering logic here
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={selectedHospital}
          onChange={handleHospitalFilterChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Hospitals</option>
          <option value="Hospital A">Hospital A</option>
          <option value="Hospital B">Hospital B</option>
          <option value="Hospital C">Hospital C</option>
          <option value="Hospital D">Hospital D</option>
        </select>

        <select
          value={selectedDiagnosis}
          onChange={handleDiagnosisFilterChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Diagnoses</option>
          <option value="Heart Failure">Heart Failure</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Diabetes">Diabetes</option>
          <option value="Hypertension">Hypertension</option>
          <option value="Asthma">Asthma</option>
        </select>
      </div>

      {/* Charts */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Number of Reviews by Hospital</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Bar data={reviewsByHospitalData} />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Number of Reviews by Diagnosis</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Bar data={reviewsByDiagnosisData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;