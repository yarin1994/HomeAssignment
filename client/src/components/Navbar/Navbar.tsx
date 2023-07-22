import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

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
