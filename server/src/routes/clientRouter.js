"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const clientRouter = (0, express_1.Router)();
const clientController = new clientController_1.ClientController();
// // Get All Orders
// // Method: GET
clientRouter.get('/', clientController.get_all_clients);
clientRouter.get('/find/:name', clientController.find_by_name);
clientRouter.get('/id/:id', clientController.find_by_id);
clientRouter.put('/:id', clientController.update_client);
clientRouter.post('/', clientController.add_client);
clientRouter.delete('/:id', clientController.delete_client_by_id);
exports.default = clientRouter;
//# sourceMappingURL=clientRouter.js.map