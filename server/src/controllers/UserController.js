"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const userService = new UserService_1.UserService();
class UserController {
    constructor() {
        this.userService = new UserService_1.UserService();
    }
    async getUser(req, res) {
        const userId = req.params.id;
        const user = await userService.getUser(userId);
        console.log(user);
        res.json(user);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map