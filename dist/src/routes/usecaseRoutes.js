"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsecaseController_1 = require("../controllers/UsecaseController");
const usecaseRouter = (0, express_1.Router)();
const usecaseController = new UsecaseController_1.UsecaseController();
// // Get All Orders
// // Method: GET
usecaseRouter.get("/", usecaseController.useCase_getAll);
usecaseRouter.post('/', usecaseController.usecase_add_new_usecase);
exports.default = usecaseRouter;
//# sourceMappingURL=usecaseRoutes.js.map