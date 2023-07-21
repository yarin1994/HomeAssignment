"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userDBProvider_1 = require("../providers/userDBProvider");
class UserService {
    constructor() {
        this.userDBProvider = new userDBProvider_1.UserDBProvider();
    }
    async getUser(userId) {
        const user = await this.userDBProvider.getUser(userId);
        if (!user) {
            throw new Error('User not exists!');
        }
        return user;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map