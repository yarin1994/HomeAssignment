"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.findClient = exports.findById = exports.deleteById = exports.getAllClients = exports.addClient = void 0;
const db_setup_1 = __importDefault(require("../db/db_setup"));
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
        const query = 'DELETE FROM Clients WHERE ID = ?';
        await db_setup_1.default.query(query, [id]);
    }
    catch (err) {
        console.error('Errr Deleteing Client', err);
    }
};
exports.deleteById = deleteById;
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
const findClient = async (field, value) => {
    try {
        const query = `SELECT * FROM Clients WHERE ${field} LIKE ?;`;
        const [rows] = await db_setup_1.default.query(query, [`%${value}%`]);
        return [rows];
    }
    catch (err) {
        console.error(`Couldn't find Client`, err);
    }
};
exports.findClient = findClient;
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
//# sourceMappingURL=clientsModel.js.map