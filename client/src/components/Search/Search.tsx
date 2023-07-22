import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Client } from '../../pages/HomePage';
import './Search.css';

interface SearchComponentProps {
  onSearchResult: (results: Client[]) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearchResult,
}) => {
  const [searchField, setSearchField] = useState('Full_Name');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/clients/search`, {
        params: {
          field: searchField,
          query: searchQuery,
        },
      });
      onSearchResult(response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="search-container">
      <select
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      >
        <option value="Full_Name">Full Name</option>
        <option value="ID">ID</option>
        <option value="Email_address">Email</option>
        <option value="Phone_Number">Phone Number</option>
        <option value="IP_Address">IP</option>
        <option value="City">City</option>
        <option value="Country">Country</option>
      </select>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search query..."
      />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchComponent;
