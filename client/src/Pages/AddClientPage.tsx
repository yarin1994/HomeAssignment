import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddClient.css';

const BASE_URL = 'http://localhost:5001';

interface Client {
  id: number | string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  ipAddress: string;
}

const AddClient: React.FC = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState<Client>({
    id: 0,
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    ipAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setClient((prevState) => ({
        ...prevState,
        [name]: parseInt(value), // Convert value from string to number
      }));
    } else {
      setClient({
        ...client,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/clients`, client);
      console.log(`response`, response);
      if (response.status === 200) {
        // Clear form after successful submission
        setClient({
          id: '',
          fullName: '',
          phoneNumber: '',
          emailAddress: '',
          ipAddress: '',
        });
        alert('Client added successfully!');
        navigate('/home');
      }
    } catch (error) {
      console.error('An error occurred while adding the client.', error);
    }
  };

  return (
    <div className="add-client-form">
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={client.id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={client.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={client.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type="text"
            name="emailAddress"
            value={client.emailAddress}
            onChange={handleInputChange}
          />
        </label>
        <label>
          IP Address:
          <input
            type="text"
            name="ipAddress"
            value={client.ipAddress}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
};

export default AddClient;
