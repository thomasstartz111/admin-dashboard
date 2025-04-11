function Dashboard() {
    return (
      <>
        {/* Patient Header */}
        <div className="patient-header">
          <div className="patient-info">
            <h2>Williams, Robert J.</h2>
            <p>MRN: 763492 | DOB: 05/12/1958 (66y) | Room: 4W-238 | Attending: Dr. Chen, L.</p>
            <p>Admitted: 04/02/2025 14:26 | Insurance: Northeastern Health | Plan: Premium PPO</p>
          </div>
          <div className="status">
            <div className="status-badge">Pending Review</div>
            <p>Day 6 of Stay</p>
          </div>
        </div>
  
        {/* Tab Navigation - This could be a separate component later */}
        <div className="tabs">
          <div className="tab active">Summary</div>
          <div className="tab">Chart</div>
          <div className="tab">Clinical Timeline</div>
          <div className="tab">Messages</div>
          <div className="tab">Discharge</div>
          <div className="tab">Documentation</div>
        </div>
  
        {/* Content Area */}
        <div className="tab-content">
          <h3>Patient Summary</h3>
          
          {/* Patient Overview */}
          <div className="overview-box">
            {/* Content from your static HTML */}
          </div>
  
          {/* Rest of dashboard content */}
        </div>
      </>
    );
  }
  
  export default Dashboard;