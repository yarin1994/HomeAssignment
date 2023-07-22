import * as mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2/promise';
import connection from '../db/db_setup';

export const addClient = async (client: {
  id: number;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  ipAddress: string;
  country: string;
  city: string;
}): Promise<void> => {
  const [result] = await connection.query(
    'INSERT INTO Clients (Full_Name, Email_Address, ID, Phone_Number, IP_Address, Country, City) VALUES (?, ?, ?,?, ?, ?, ?)',

    [
      client.fullName,
      client.emailAddress,
      client.id,
      client.phoneNumber,
      client.ipAddress,
      client.country,
      client.city,
    ]
  );
};

export const getAllClients = async (): Promise<mysql.RowDataPacket[]> => {
  try {
    const [rows] = await connection.query(`SELECT * FROM Clients`);
    return rows as RowDataPacket[];
  } catch (err) {
    console.error('Error Fetching Clients', err);
  }
};

export const deleteById = async (id: number): Promise<void> => {
  try {
    const query = 'DELETE FROM Clients WHERE ID = ?';
    await connection.query(query, [id]);
  } catch (err) {
    console.error('Errr Deleteing Client', err);
  }
};

export const findById = async (id: number): Promise<RowDataPacket | null> => {
  try {
    const query = 'SELECT * FROM Clients WHERE ID = ?;';
    const [rows] = await connection.query(query, [id]);
    return rows as RowDataPacket;
  } catch (err) {
    console.error(`Couldn't find Client`, err);
  }
};

export const findClient = async (
  field: string,
  value: string | number
): Promise<RowDataPacket[] | null> => {
  try {
    const query = `SELECT * FROM Clients WHERE ${field} LIKE ?;`;
    const [rows] = await connection.query(query, [`%${value}%`]);
    return [rows] as RowDataPacket[];
  } catch (err) {
    console.error(`Couldn't find Client`, err);
  }
};

export const updateClient = async (
  id: number,
  updatedClient: {
    fullName: string;
    phoneNumber: string;
    ipAddress: string;
    emailAddress: string;
  }
): Promise<void> => {
  try {
    const { fullName, phoneNumber, ipAddress, emailAddress } = updatedClient;
    const query =
      'UPDATE Clients SET Full_Name = ?, Phone_Number = ?, IP_Address = ?, Email_Address = ? WHERE ID = ?';

    await connection.query(query, [
      fullName,
      phoneNumber,
      ipAddress,
      emailAddress,
      id,
    ]);
  } catch (err) {
    console.error('Errr Updateing Client', err);
  }
};
