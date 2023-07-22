import React from 'react';
import axios from 'axios';
import './ClientCard.css';

const BASE_URL = 'http://localhost:5001';
interface Client {
  ID: number;
  Full_Name: string;
  Phone_Number: string;
  Email_address: string;
  IP_Address: string;
  Country: string;
  City: string;
  onDelete?: (id: number) => void;
}

interface ClientCardProps extends Client {
  onDelete: (id: number) => void;
}

const ClientCard: React.FC<ClientCardProps> = (item) => {
  const {
    ID,
    Full_Name,
    Phone_Number,
    Email_address,
    IP_Address,
    Country,
    City,
    onDelete,
  } = item;

  const CardOnClick = (id: number) => {
    axios.delete(`${BASE_URL}/clients/` + id);
    onDelete(id);
  };

  return (
    <>
      <div className="client-card">
        <h4>Name: {item.Full_Name}</h4>
        <h4>ID: {item.ID}</h4>
        <h4>phoneNumber: {item.Phone_Number}</h4>
        <h4>emailAddress: {item.Email_address}</h4>
        <h4>ipAddress: {item.IP_Address}</h4>
        <h4>country: {item.Country}</h4>
        <h4>city: {item.City}</h4>

        <button
          onClick={() => {
            // productOnClick(item.id, item.name, item.price);
            CardOnClick(item.ID);
          }}
          //   className="product-card button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ClientCard;
