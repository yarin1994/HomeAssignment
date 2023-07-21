import UseCaseModel, { UsecaseDocument } from '../schemas/UsecaseSchema';
import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { UsecaseService } from '../services/UsecaseService';

const usecaseService = new UsecaseService();

export class UsecaseController {
  private usecaseService: UsecaseService;

  constructor() {
    this.usecaseService = new UsecaseService();
  }

  public async useCase_getAll(req: Request, res: Response): Promise<void> {
    // const userId: string = req.params.id;
    const usecases = await usecaseService.useCase_getAll();
    console.log(usecases); // TO BE DELETED
    res.json(usecases);
  }

  public async usecase_add_new_usecase(
    req: Request,
    res: Response
  ): Promise<void> {
    const usecaseData: UsecaseDocument = new UseCaseModel(); // Create an instance
    console.log('request', req.body);
    (usecaseData._id = new mongoose.Types.ObjectId()),
      (usecaseData.subject = req.body.subject);
    usecaseData.description = req.body.description;
    usecaseData.action = req.body.action;
    usecaseData.salesforce_action = req.body.salesforce_action;
    usecaseData.notes = req.body.notes;
    console.log('usecaseData', usecaseData);
    const newUsecase = await usecaseService.usecase_add_new_usecase(
      usecaseData
    );
    res.json(newUsecase);
  }

  public async updateClient(req: Request, res: Response): Promise<void> {
    const usecaseData: UsecaseDocument = new UseCaseModel(); // Create an instance
    console.log('request', req.body);
    (usecaseData._id = new mongoose.Types.ObjectId()),
      (usecaseData.subject = req.body.subject);
    usecaseData.description = req.body.description;
    usecaseData.action = req.body.action;
    usecaseData.salesforce_action = req.body.salesforce_action;
    usecaseData.notes = req.body.notes;
    console.log('usecaseData', usecaseData);
    const newUsecase = await usecaseService.usecase_add_new_usecase(
      usecaseData
    );
    res.json(newUsecase);
  }
}
