"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.findById = exports.findByName = exports.deleteById = exports.getAllClients = exports.addClient = void 0;
const db_setup_1 = require("../db/db_setup");
const addClient = async (client) => {
    const [result] = await db_setup_1.default.query('INSERT INTO Clients (Full_Name, Email_Address, ID, Phone_Number, IP_Address, Country, City) VALUES (?, ?, ?,?, ?, ?, ?)', [
        client.fullName,
        client.emailAddress,
        client.id,
        client.phoneNumber,
        client.ipAddress,
        client.country,
        client.city,
    ]);
};
exports.addClient = addClient;
const getAllClients = async () => {
    try {
        const [rows] = await db_setup_1.default.query(`SELECT * FROM Clients`);
        return rows;
    }
    catch (err) {
        console.error('Error Fetching Clients', err);
    }
};
exports.getAllClients = getAllClients;
const deleteById = async (id) => {
    try {
        // const [rows] = await connection.query(`DELETE FROM Clients WHERE ID = ?`);
        const query = 'DELETE FROM Clients WHERE ID = ?';
        await db_setup_1.default.query(query, [id]);
    }
    catch (err) {
        console.error('Errr Deleteing Client', err);
    }
};
exports.deleteById = deleteById;
const findByName = async (name) => {
    try {
        const query = 'SELECT * FROM Clients WHERE Full_Name LIKE ?;';
        const [rows] = await db_setup_1.default.query(query, [`%${name}%`]);
        return [rows];
    }
    catch (err) {
        console.error('Errr Deleteing Client', err);
    }
};
exports.findByName = findByName;
const findById = async (id) => {
    try {
        const query = 'SELECT * FROM Clients WHERE ID = ?;';
        const [rows] = await db_setup_1.default.query(query, [id]);
        return rows;
    }
    catch (err) {
        console.error(`Couldn't find Client`, err);
    }
};
exports.findById = findById;
const updateClient = async (id, updatedClient) => {
    try {
        const { fullName, phoneNumber, ipAddress, emailAddress } = updatedClient;
        const query = 'UPDATE Clients SET Full_Name = ?, Phone_Number = ?, IP_Address = ?, Email_Address = ? WHERE ID = ?';
        await db_setup_1.default.query(query, [
            fullName,
            phoneNumber,
            ipAddress,
            emailAddress,
            id,
        ]);
    }
    catch (err) {
        console.error('Errr Updateing Client', err);
    }
};
exports.updateClient = updateClient;
//# sourceMappingURL=clients.js.map