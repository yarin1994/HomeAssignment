import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header title="My App" />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
