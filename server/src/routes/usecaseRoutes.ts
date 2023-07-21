import { Router } from 'express';
import { UsecaseController } from '../controllers/UsecaseController';

const usecaseRouter = Router();
const usecaseController = new UsecaseController();

// // Get All Orders
// // Method: GET
usecaseRouter.get("/", usecaseController.useCase_getAll);
usecaseRouter.post('/', usecaseController.usecase_add_new_usecase);


export default usecaseRouter;
