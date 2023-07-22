import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/addClient">
            <FontAwesomeIcon icon={faPlus} />
            Add Client
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
