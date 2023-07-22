"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const clientRouter = (0, express_1.Router)();
const clientController = new clientController_1.ClientController();
const upload = (0, multer_1.default)({ dest: 'uploads/' }).single('file');
// Get All Clients
// Method: GET
clientRouter.get('/', clientController.get_all_clients);
// Find Clients by name
// Method: GET
clientRouter.get('/find/:name', clientController.find_by_name);
// Find Clients by name
// Method: GET
clientRouter.get('/search', clientController.find_client);
// Find Client by id.
// Method: GET
clientRouter.get('/id/:id', clientController.find_by_id);
// Updaete Client details
// Method: PUT
clientRouter.put('/:id', clientController.update_client);
// Add new Client
// Method: POST
clientRouter.post('/', clientController.add_client);
// Delete Client by id
// Method: DELETE
clientRouter.delete('/:id', clientController.delete_client_by_id);
// Upload CSV File
// Method: POST
clientRouter.post('/uploads', upload, clientController.upload_csv_file);
exports.default = clientRouter;
//# sourceMappingURL=clientRouter.js.map