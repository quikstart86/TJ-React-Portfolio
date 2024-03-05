// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

// Import CSS files for styling
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons

// Ensure Bootstrap JavaScript is loaded
import 'bootstrap';

// Render the root component of the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with React StrictMode */}
    <App />
  </React.StrictMode>,
);
