"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const clientRouter = (0, express_1.Router)();
const clientController = new clientController_1.ClientController();
// Get All Clients
// Method: GET
clientRouter.get('/', clientController.get_all_clients);
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
exports.default = clientRouter;
//# sourceMappingURL=clientRouter.js.map