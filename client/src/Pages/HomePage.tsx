import React, { useState, useEffect } from 'react';
import ClientCard from '../components/ClientCard';
import Search from '../components/Search';
import axios from 'axios';
import './HomePage.css';

const BASE_URL = 'http://localhost:5001';

interface Client {
  ID: number;
  Full_Name: string;
  Phone_Number: string;
  Email_address: string;
  IP_Address: string;
  Country: string;
  City: string;
}

const HomePage = () => {
  const [data, setData] = useState<Client[]>([]);
  // Once a Client is deleted update will turn to true and will trigger the useEffect.
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page

  useEffect(() => {
    fetchData();
  }, [update]);

  const fetchData = async () => {
    const response = await axios.get(`${BASE_URL}/clients`);
    setData(response.data);
  };

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / 10);

  const handleDelete = (id: number) => {
    // Changes the update flag back to false
    setUpdate((update) => !update);
  };
  return (
    <>
      <h2>Clients Page</h2>
      <Search />
      <div className="card-container">
        {currentItems.map((item) => (
          <ClientCard
            Full_Name={item.Full_Name}
            ID={item.ID}
            Email_address={item.Email_address}
            IP_Address={item.IP_Address}
            Phone_Number={item.Phone_Number}
            Country={item.Country}
            City={item.City}
            onDelete={handleDelete}
            key={item.ID}
          />
        ))}
      </div>
      <button onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}>
        Previous
      </button>
      <button
        onClick={() => setCurrentPage((old) => Math.min(old + 1, totalPages))}
      >
        Next
      </button>
    </>
  );
};

export default HomePage;
