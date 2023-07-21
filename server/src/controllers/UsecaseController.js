"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecaseController = void 0;
const UsecaseSchema_1 = require("../schemas/UsecaseSchema");
const mongoose_1 = require("mongoose");
const UsecaseService_1 = require("../services/UsecaseService");
const usecaseService = new UsecaseService_1.UsecaseService();
class UsecaseController {
    constructor() {
        this.usecaseService = new UsecaseService_1.UsecaseService();
    }
    async useCase_getAll(req, res) {
        // const userId: string = req.params.id;
        const usecases = await usecaseService.useCase_getAll();
        console.log(usecases); // TO BE DELETED
        res.json(usecases);
    }
    async usecase_add_new_usecase(req, res) {
        const usecaseData = new UsecaseSchema_1.default(); // Create an instance
        console.log('request', req.body);
        (usecaseData._id = new mongoose_1.default.Types.ObjectId()),
            (usecaseData.subject = req.body.subject);
        usecaseData.description = req.body.description;
        usecaseData.action = req.body.action;
        usecaseData.salesforce_action = req.body.salesforce_action;
        usecaseData.notes = req.body.notes;
        console.log('usecaseData', usecaseData);
        const newUsecase = await usecaseService.usecase_add_new_usecase(usecaseData);
        res.json(newUsecase);
    }
    async updateClient(req, res) {
        const usecaseData = new UsecaseSchema_1.default(); // Create an instance
        console.log('request', req.body);
        (usecaseData._id = new mongoose_1.default.Types.ObjectId()),
            (usecaseData.subject = req.body.subject);
        usecaseData.description = req.body.description;
        usecaseData.action = req.body.action;
        usecaseData.salesforce_action = req.body.salesforce_action;
        usecaseData.notes = req.body.notes;
        console.log('usecaseData', usecaseData);
        const newUsecase = await usecaseService.usecase_add_new_usecase(usecaseData);
        res.json(newUsecase);
    }
}
exports.UsecaseController = UsecaseController;
//# sourceMappingURL=UsecaseController.js.map