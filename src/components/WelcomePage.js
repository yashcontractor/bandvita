// import React from 'react';
// import '../App.css';
// import { Doughnut, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';

// const WelcomePage = () => {
//   const currentUser = {
//     username: <strong>John Doe</strong>,
//     healthMetrics: {
//       SkinTemperature: 98.6, // degrees Fahrenheit
//       HeartRate: 72, // beats per minute
//     },
//     weeklyMetrics: {
//       SkinTemperature: [98.5, 98.7, 98.4, 98.8, 98.6, 98.9, 98.7],
//       HeartRate: [70, 72, 75, 73, 71, 74, 72],
//     }
//   };

//   const chartData = {
//     labels: Object.keys(currentUser.healthMetrics),
//     datasets: [{
//       data: Object.values(currentUser.healthMetrics),
//       backgroundColor: [
//         'rgba(54, 162, 235, 0.7)', // Skin Temperature
//         'rgba(255, 99, 132, 0.7)', // Heart Rate
//       ],
//       hoverOffset: 4
//     }]
//   };

//   const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const barOptions = {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   };

//   const getBarData = (metric) => ({
//     labels: weekLabels,
//     datasets: [{
//       label: metric,
//       data: currentUser.weeklyMetrics[metric],
//       backgroundColor: 'rgba(54, 162, 235, 0.5)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1
//     }]
//   });

//   return (
//     <div className="welcome-container">
//       <header className="dashboard-header">
//         <h1>Health Dashboard</h1>
//         <div>Welcome, {currentUser.username}!</div>
//       </header>
//       <div className="dashboard-content">
//         <div className="chart-container overview">
//           <h2 style={{textAlign: 'center'}}>Overview of Key Health Metrics</h2>
//           <p>This doughnut chart provides an overview of your key health metrics.</p>
//           <div style={{height: '300px', width: '300px'}}> {/* Adjust the size as needed */}
//             <Doughnut data={chartData} />
//           </div>
//           <div className="metric-data">
//             <p><strong>Skin Temperature:</strong> {currentUser.healthMetrics.SkinTemperature}°F</p>
//             <p><strong>Heart Rate:</strong> {currentUser.healthMetrics.HeartRate} bpm</p>
//           </div>
//         </div>
//         <div className="chart-container metric">
//           <h3 style={{textAlign: 'center'}}>Skin Temperature This Week</h3>
//           <p>This bar chart shows your skin temperature readings for the current week.</p>
//           <Bar data={getBarData('SkinTemperature')} options={barOptions} />
//           <div className="metric-data">
//             <p><strong>Average:</strong> {calculateAverage(currentUser.weeklyMetrics.SkinTemperature)}°F</p>
//           </div>
//         </div>
//         <div className="chart-container metric">
//           <h3 style={{textAlign: 'center'}}>Heart Rate This Week</h3>
//           <p>This bar chart displays your heart rate measurements for the current week.</p>
//           <Bar data={getBarData('HeartRate')} options={barOptions} />
//           <div className="metric-data">
//             <p><strong>Average:</strong> {calculateAverage(currentUser.weeklyMetrics.HeartRate)} bpm</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const calculateAverage = (data) => {
//   const sum = data.reduce((acc, val) => acc + val, 0);
//   return (sum / data.length).toFixed(2);
// };

// export default WelcomePage;



// WelcomePage.js
import React from 'react';
import '../App.css';

const WelcomePage = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')); // Retrieve the logged-in user

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome, {currentUser.username}!</h1>
      <h2>Your Test Results:</h2>
      <ul>
        {currentUser.testResults.map((result, index) => (
          <li key={index}>Test {index + 1}: {result}</li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomePage;