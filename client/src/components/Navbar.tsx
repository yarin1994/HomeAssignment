import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Clients</Link>
        </li>
        <li>
          <Link to="/addClient">Add Client</Link>
        </li>
        <li>
          <Link to="/contact">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
