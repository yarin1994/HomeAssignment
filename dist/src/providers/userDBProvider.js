"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDBProvider = void 0;
const UserSchema_1 = require("../schemas/UserSchema");
class UserDBProvider {
    constructor() { }
    getUser(userId) {
        return UserSchema_1.default.findById(userId).exec();
    }
}
exports.UserDBProvider = UserDBProvider;
//# sourceMappingURL=userDBProvider.js.map