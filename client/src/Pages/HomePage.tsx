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
  //   const [search, setSearch] = useState('');
  const [update, setUpdate] = useState(false); // new state variable

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

  //   const filteredData = data.filter(
  //     (item) =>
  //       item.Full_Name.toLowerCase().includes(search.toLowerCase()) ||
  //       item.ID.toString().includes(search) ||
  //       item.Phone_Number.includes(search) ||
  //       item.Email_address.toLowerCase().includes(search.toLowerCase()) ||
  //       item.IP_Address.includes(search) ||
  //       item.Country.toLowerCase().includes(search.toLowerCase()) ||
  //       item.City.toLowerCase().includes(search.toLowerCase())
  //   );
  const handleDelete = (id: number) => {
    setUpdate((update) => !update); // toggle update state to trigger useEffect
  };
  return (
    <>
      <h2>Products Page</h2>

      <div className="card-container">
        {/* {data.length ? (
          data.map((item) => (
            <div key={item.ID}>
              <ClientCard
                fullName={item.Full_Name}
                id={item.ID}
                emailAddress={item.Email_address}
                ipAddress={item.IP_Address}
                phoneNumber={item.Phone_Number}
                country={item.Country}
                city={item.City}
              />
            </div>
          ))
        ) : (
          <h2>Loading...</h2>
        )} */}
        {/* <Search search={search} setSearch={setSearch} /> */}

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
      </div>
    </>
  );
};

export default HomePage;
