"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTables = void 0;
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'humanz_db',
    connectionLimit: 10,
});
const setupTables = async () => {
    try {
        const [rows] = await connection.query(`
          CREATE TABLE IF NOT EXISTS Clients (
            ID int PRIMARY KEY,
            Full_Name VARCHAR(255) NOT NULL,
            Phone_Number VARCHAR(255) NOT NULL,
            IP_Address VARCHAR(255) NOT NULL,
            Email_address VARCHAR(255),
            Continent VARCHAR(255),
            Country VARCHAR(255)
          )
        `);
        console.log('connected successfully to db!');
    }
    catch (err) {
        console.error(err);
    }
};
exports.setupTables = setupTables;
exports.default = connection;
//# sourceMappingURL=db_setup.js.map