"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userRouter = (0, express_1.Router)();
const userController = new UserController_1.UserController();
userRouter.get('/:id', userController.getUser.bind(userController));
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map