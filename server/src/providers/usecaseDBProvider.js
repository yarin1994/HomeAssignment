"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseDBProvider = void 0;
const UsecaseSchema_1 = require("../schemas/UsecaseSchema");
class UsecaseDBProvider {
    constructor() { }
    async useCase_getAll() {
        // return Usecase.findById().exec();
        try {
            const usecases = await UsecaseSchema_1.default.find().exec();
            return usecases;
        }
        catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }
    async usecase_add_new_usecase(usecase) {
        try {
            const newUsecase = await usecase.save();
            return newUsecase;
        }
        catch (error) {
            console.error('Error while saving use case:', error);
            return null;
        }
    }
}
exports.UsecaseDBProvider = UsecaseDBProvider;
//# sourceMappingURL=usecaseDBProvider.js.map