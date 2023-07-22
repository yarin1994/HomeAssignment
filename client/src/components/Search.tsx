import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [searchField, setSearchField] = useState('fullName');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    console.log(`searchField`, searchField);
    try {
      const response = await axios.get(`http://localhost:5001/clients/search`, {
        params: {
          field: searchField,
          query: searchQuery,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div>
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
