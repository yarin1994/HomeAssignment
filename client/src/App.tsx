import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import AddClient from './pages/AddClientPage';
import HomePage from './pages/HomePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Link to="/home">
            {/* {' '} */}
            <img src="/humanz-logo.png" alt="My Logo" />
          </Link>
        </header>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/addClient" element={<AddClient />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
