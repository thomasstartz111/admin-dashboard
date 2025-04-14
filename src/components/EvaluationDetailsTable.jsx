import React, { useState, useEffect } from 'react';
import EvaluationDetailsTable from './EvaluationDetailsTable';

const EvaluationDetailsTableComponent = ({ evaluationData }) => {
  const [expandedSubsets, setExpandedSubsets] = useState({});
  const [expandedCriteria, setExpandedCriteria] = useState({});
  const [overwrittenDecisions, setOverwrittenDecisions] = useState({});
  const [editingCriterion, setEditingCriterion] = useState(null);

  // Expand all subsets by default on initial render
  useEffect(() => {
    const initialExpandedSubsets = {};
    evaluationData.forEach((subset) => {
      initialExpandedSubsets[subset.name] = true; // Expand all subsets
    });
    setExpandedSubsets(initialExpandedSubsets);
  }, [evaluationData]);

  const toggleSubset = (subset) => {
    setExpandedSubsets((prev) => ({
      ...prev,
      [subset]: !prev[subset],
    }));
  };

  const toggleCriterion = (criterion) => {
    setExpandedCriteria((prev) => ({
      ...prev,
      [criterion]: !prev[criterion],
    }));
  };

  const handleDecisionChange = (criterion, newDecision) => {
    setOverwrittenDecisions((prev) => ({
      ...prev,
      [criterion]: newDecision,
    }));
    setEditingCriterion(null); // Close the editing box after selection
  };

  const getColorClass = (evaluation) => {
    switch (evaluation) {
      case 'Definitively Meets':
        return 'bg-green-700 text-white';
      case 'Likely Meets':
        return 'bg-green-300 text-white';
      case 'Possibly Meets':
        return 'bg-gray-500 text-white';
      case 'Likely Does Not Meet':
        return 'bg-red-300 text-white';
      case 'Definitively Does Not Meet':
        return 'bg-red-700 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Evaluation Details</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Criteria</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Evaluation</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {evaluationData.map((subset) => (
            <React.Fragment key={subset.name}>
              {/* Subset Row */}
              <tr>
                <td className="px-4 py-2 text-sm text-gray-800 font-bold">
                  <button
                    onClick={() => toggleSubset(subset.name)}
                    className="hover:underline flex items-center"
                  >
                    <span className={`mr-2 text-gray-600`}>
                      {expandedSubsets[subset.name] ? '▼' : '▶'}
                    </span>
                    {subset.name}
                  </button>
                </td>
                <td></td>
              </tr>

              {/* Criteria Rows */}
              {expandedSubsets[subset.name] &&
                subset.criteria.map((criterion) => (
                  <React.Fragment key={criterion.name}>
                    <tr>
                      <td className="px-6 py-2 text-sm text-gray-800">
                        <button
                          onClick={() => toggleCriterion(criterion.name)}
                          className="hover:underline flex items-center"
                        >
                          <span className={`mr-2 text-gray-600`}>
                            {expandedCriteria[criterion.name] ? '▼' : '▶'}
                          </span>
                          {criterion.name}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <div className="flex items-center space-x-2">
                          {/* Single Clickable Box */}
                          {editingCriterion === criterion.name ? (
                            <div className="relative">
                              <select
                                className="border border-gray-300 rounded-lg text-sm px-2 py-1 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                                value={overwrittenDecisions[criterion.name] || criterion.evaluation}
                                onChange={(e) =>
                                  handleDecisionChange(criterion.name, e.target.value)
                                }
                              >
                                <option value="Definitively Does Not Meet">Definitively Does Not Meet</option>
                                <option value="Likely Does Not Meet">Likely Does Not Meet</option>
                                <option value="Possibly Meets">Possibly Meets</option>
                                <option value="Likely Meets">Likely Meets</option>
                                <option value="Definitively Meets">Definitively Meets</option>
                              </select>
                            </div>
                          ) : (
                            <button
                              onClick={() => setEditingCriterion(criterion.name)}
                              className={`px-2 py-1 rounded-full ${getColorClass(
                                overwrittenDecisions[criterion.name] || criterion.evaluation
                              )}`}
                            >
                              {overwrittenDecisions[criterion.name] || criterion.evaluation}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>

                    {/* Detailed Evaluation Notes */}
                    {expandedCriteria[criterion.name] && criterion.details && (
                      <tr>
                        <td colSpan="2" className="px-6 py-2 text-sm text-gray-600">
                          <strong>Evaluation Details:</strong> {criterion.details}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationDetailsTable;