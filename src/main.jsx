import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/normalize.css'
import App from './app/App.jsx'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)
