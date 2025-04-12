import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const DashboardPage = () => {
  // Mock data for charts
  const reviewsByHospitalData = {
    labels: ['Hospital A', 'Hospital B', 'Hospital C', 'Hospital D'],
    datasets: [
      {
        label: 'Number of Reviews',
        data: [120, 90, 75, 60],
        backgroundColor: ['rgba(76, 175, 80, 0.7)', 'rgba(33, 150, 243, 0.7)', 'rgba(255, 152, 0.7)', 'rgba(244, 67, 54, 0.7)'],
        borderColor: ['#4CAF50', '#2196F3', '#FF9800', '#F44336'],
        borderWidth: 1,
      },
    ],
  };

  const denialsTrendData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Number of Denials',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)),
        borderColor: '#F44336',
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const timeSpentTrendData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Time Spent on Reviews (Hours)',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 1),
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        fill: true,
        tension: 0.4,
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

  const avgLOSData = {
    labels: ['Heart Failure', 'Pneumonia', 'Diabetes', 'Hypertension', 'Asthma'],
    datasets: [
      {
        label: 'Hospital A',
        data: [7, 5, 6, 4, 3],
        backgroundColor: 'rgba(76, 175, 80, 0.7)',
        borderColor: '#4CAF50',
        borderWidth: 1,
      },
      {
        label: 'Hospital B',
        data: [6, 4, 5, 3, 2],
        backgroundColor: 'rgba(33, 150, 243, 0.7)',
        borderColor: '#2196F3',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to the Daisy AI Dashboard!</p>

      {/* Reviews by Hospital */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Number of Reviews by Hospital</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Bar data={reviewsByHospitalData} options={chartOptions} />
        </div>
      </div>

      {/* Denials Trend */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Number of Denials in the Last 30 Days</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Line data={denialsTrendData} options={chartOptions} />
        </div>
      </div>

      {/* Time Spent on Reviews */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Time Spent on Reviews (Last 30 Days)</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Line data={timeSpentTrendData} options={chartOptions} />
        </div>
      </div>

      {/* Reviews by Diagnosis */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Number of Reviews by Diagnosis</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Bar data={reviewsByDiagnosisData} options={chartOptions} />
        </div>
      </div>

      {/* Average Length of Stay */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Average Length of Stay by Hospital and Diagnosis</h2>
        <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '300px' }}>
          <Bar data={avgLOSData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;