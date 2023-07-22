"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupTables = void 0;
const mysql = __importStar(require("mysql2/promise"));
const dotenv = __importStar(require("dotenv"));
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
            Country VARCHAR(255),
            City VARCHAR(255)
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