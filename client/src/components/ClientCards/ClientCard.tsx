import React from 'react';
import axios from 'axios';
import './ClientCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <button
          onClick={() => {
            CardOnClick(item.ID);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <div>
          <div className="fields-name">
            <a>Name:</a>
            <a>ID:</a>
            <a>Phone number:</a>
            <a>Email:</a>
            <a>IP:</a>
            {item.Country ? <a>Country:</a> : null}
            {item.City ? <a>City:</a> : null}
          </div>
          <div className="dynamic-values">
            <a>{item.Full_Name}</a>
            <a>{item.ID}</a>
            <a>{item.Phone_Number}</a>
            <a>{item.Email_address}</a>
            <a>{item.Country}</a>
            <a>{item.IP_Address}</a>
            <a>{item.City}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCard;
