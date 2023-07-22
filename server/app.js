"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_setup_1 = require("./src/db/db_setup");
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const clientRouter_1 = __importDefault(require("./src/routes/clientRouter"));
const app = express();
const port = 5001;
app.use(cors());
app.use(bodyParser.json());
app.use('/clients', clientRouter_1.default);
(0, db_setup_1.setupTables)();
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=app.js.map