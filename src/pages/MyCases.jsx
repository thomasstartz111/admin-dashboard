import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';

const ReviewQueueTable = () => {
  const navigate = useNavigate();

  // Sample data - replace with your actual data or API call
  const initialCases = [
    { id: 'C001', patient: 'Richard Gonzalez', hospital: 'City Medical Center', type: 'Per Diem', admissionDate: '8/18/2024', los: 7, nextReview: '8/31/2024', primaryDx: 'Stroke', barrier: 'Awaiting Placement', lob: 'Commercial', reviewed: false, reviewMeets: 'Likely Meets' },
    { id: 'C002', patient: 'Richard Anderson', hospital: 'County Hospital', type: 'DRG', admissionDate: '8/5/2024', los: 20, nextReview: '8/28/2024', primaryDx: 'Diabetes', barrier: 'Rehab Bed Availability', lob: 'Commercial', reviewed: false, reviewMeets: 'Definitely Does Not Meet' },
    { id: 'C003', patient: 'Michael Johnson', hospital: "St. Mary's Hospital", type: 'Per Diem', admissionDate: '8/24/2024', los: 1, nextReview: '8/24/2024', primaryDx: 'Diabetes', barrier: 'Medical Stability', lob: 'Medicare', reviewed: false, reviewMeets: 'Definitely Meets' },
    { id: 'C004', patient: 'Linda Garcia', hospital: 'General Hospital', type: 'Per Diem', admissionDate: '8/5/2024', los: 20, nextReview: '8/27/2024', primaryDx: 'COPD', barrier: 'Awaiting Placement', lob: 'Medicare', reviewed: false, reviewMeets: 'Likely Meets' },
    { id: 'C005', patient: 'Thomas Wilson', hospital: 'County Hospital', type: 'DRG', admissionDate: '8/19/2024', los: 6, nextReview: '8/23/2024', primaryDx: 'Heart Failure', barrier: 'Awaiting Placement', lob: 'Commercial', reviewed: false, reviewMeets: 'Possibly Meets' },
    { id: 'C006', patient: 'Lisa Perez', hospital: "St. Mary's Hospital", type: 'Per Diem', admissionDate: '8/12/2024', los: 13, nextReview: '8/26/2024', primaryDx: 'Fracture', barrier: 'Insurance Approval', lob: 'Commercial', reviewed: false, reviewMeets: 'Definitely Meets' },
    { id: 'C007', patient: 'Daniel Lopez', hospital: 'County Hospital', type: 'DRG', admissionDate: '8/8/2024', los: 17, nextReview: '9/1/2024', primaryDx: 'Fracture', barrier: 'Awaiting Placement', lob: 'Medicaid', reviewed: false, reviewMeets: 'Possibly Meets' },
    { id: 'C008', patient: 'Mary Sanchez', hospital: "St. Mary's Hospital", type: 'Per Diem', admissionDate: '8/9/2024', los: 16, nextReview: '9/1/2024', primaryDx: 'Fracture', barrier: 'Medical Stability', lob: 'Commercial', reviewed: false, reviewMeets: 'Definitely Meets' },
    { id: 'C009', patient: 'William Ramirez', hospital: 'County Hospital', type: 'Per Diem', admissionDate: '8/21/2024', los: 4, nextReview: '8/26/2024', primaryDx: 'Stroke', barrier: 'Rehab Bed Availability', lob: 'Medicare', reviewed: true, reviewMeets: 'Definitely Meets' },
    { id: 'C010', patient: 'Michael Jones', hospital: 'City Medical Center', type: 'Per Diem', admissionDate: '8/16/2024', los: 9, nextReview: '8/25/2024', primaryDx: 'Pneumonia', barrier: 'Medical Stability', lob: 'Medicare', reviewed: true, reviewMeets: 'Likely Meets' },
    { id: 'C011', patient: 'Karen Martin', hospital: 'County Hospital', type: 'Per Diem', admissionDate: '8/12/2024', los: 13, nextReview: '8/28/2024', primaryDx: 'Fracture', barrier: 'Family Decision', lob: 'Medicare', reviewed: true, reviewMeets: 'Likely Meets' },
    { id: 'C012', patient: 'Paul Clark', hospital: "St. Mary's Hospital", type: 'DRG', admissionDate: '8/18/2024', los: 7, nextReview: '8/27/2024', primaryDx: 'COPD', barrier: 'Medical Stability', lob: 'Medicare', reviewed: true, reviewMeets: 'Likely Meets' },
    { id: 'C013', patient: 'Mark Hernandez', hospital: "St. Mary's Hospital", type: 'DRG', admissionDate: '8/21/2024', los: 4, nextReview: '8/28/2024', primaryDx: 'COPD', barrier: 'Family Decision', lob: 'Medicare', reviewed: true, reviewMeets: 'Possibly Meets' },
    { id: 'C014', patient: 'Sandra Martin', hospital: 'County Hospital', type: 'Per Diem', admissionDate: '8/12/2024', los: 13, nextReview: '8/23/2024', primaryDx: 'Diabetes', barrier: 'Awaiting Placement', lob: 'Commercial', reviewed: true, reviewMeets: 'Definitely Meets' },
    { id: 'C015', patient: 'Margaret Lewis', hospital: 'City Medical Center', type: 'DRG', admissionDate: '8/20/2024', los: 5, nextReview: '8/29/2024', primaryDx: 'Diabetes', barrier: 'Rehab Bed Availability', lob: 'Commercial', reviewed: true, reviewMeets: 'Definitely Meets' }
  ];

  const [cases, setCases] = useState(initialCases);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCases, setSelectedCases] = useState([]);

  // Handle the select all checkbox
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedCases(selectAll ? [] : cases.map(c => c.id));
  };

  // Handle individual case selection
  const handleSelectCase = (id) => {
    setSelectedCases(prev => {
      if (prev.includes(id)) {
        const newSelected = prev.filter(caseId => caseId !== id);
        setSelectAll(false);
        return newSelected;
      } else {
        const newSelected = [...prev, id];
        setSelectAll(newSelected.length === cases.length);
        return newSelected;
      }
    });
  };

  // Function to get the appropriate badge style
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Definitely Meets':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Likely Meets':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Possibly Meets':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Definitely Does Not Meet':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  // Function to handle row click
  const handleRowClick = (caseId) => {
    navigate(`/case-review/${caseId}`);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded text-blue-600"
                        onChange={handleSelectAll}
                        checked={selectAll}
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Case #
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hospital Name
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admission Date
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    LOS
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Review
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Primary Dx
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Primary Barrier to Discharge
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    LOB
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Review Completed
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    AI Review
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Call Provider
                  </th>
                  <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Review Chart
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => handleRowClick(caseItem.id)}>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded text-blue-600"
                          onChange={() => handleSelectCase(caseItem.id)}
                          checked={selectedCases.includes(caseItem.id)}
                        />
                      </div>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{caseItem.id}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{caseItem.patient}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.hospital}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.type}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.admissionDate}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.los}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.nextReview}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.primaryDx}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.barrier}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">{caseItem.lob}</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex justify-center">
                        {caseItem.reviewed ? (
                          <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="h-5 w-5 bg-red-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyle(caseItem.reviewMeets)}`}>
                        {caseItem.reviewMeets}
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Phone size={16} />
                      </button>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-purple-600 hover:text-purple-800">
                        <FileText size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewQueueTable;