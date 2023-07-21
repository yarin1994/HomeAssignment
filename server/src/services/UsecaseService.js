"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseService = void 0;
const usecaseDBProvider_1 = require("../providers/usecaseDBProvider");
class UsecaseService {
    constructor() {
        this.usecaseDBProvider = new usecaseDBProvider_1.UsecaseDBProvider();
    }
    async useCase_getAll() {
        try {
            const usecase = await this.usecaseDBProvider.useCase_getAll();
            return usecase;
        }
        catch {
            // if (!usecase) {
            throw new Error('User not exists!');
            // }
        }
        // const usecase = await this.usecaseDBProvider.useCase_getAll();
        // if (!usecase) {
        //     throw new Error('User not exists!')
        // }
        // return usecase
    }
    async usecase_add_new_usecase(usecase) {
        const newUsecase = await this.usecaseDBProvider.usecase_add_new_usecase(usecase);
        if (!newUsecase) {
            throw Error('Unable to add new usecase');
        }
        return newUsecase;
    }
}
exports.UsecaseService = UsecaseService;
//# sourceMappingURL=UsecaseService.js.map