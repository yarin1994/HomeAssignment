import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
dotenv.config();
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'humanz_db',
  connectionLimit: 10,
});

export const setupTables = async (): Promise<void> => {
  try {
    const [rows] = await connection.query(`
          CREATE TABLE IF NOT EXISTS Clients (
            ID int PRIMARY KEY,
            Full_Name VARCHAR(255) NOT NULL,
            Phone_Number VARCHAR(255) NOT NULL,
            IP_Address VARCHAR(255) NOT NULL,
            Email_address VARCHAR(255),
            Country VARCHAR(255),
            City VARCHAR(255)
          )
        `);
    console.log('connected successfully to db!');
  } catch (err) {
    console.error(err);
  }
};

export default connection;
