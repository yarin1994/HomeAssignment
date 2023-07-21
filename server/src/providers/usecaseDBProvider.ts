import Usecase, { UsecaseDocument } from '../schemas/UsecaseSchema';

export class UsecaseDBProvider {

    constructor() { }

    public async useCase_getAll(): Promise<UsecaseDocument[] | null> {
        // return Usecase.findById().exec();
        try {
            const usecases = await Usecase.find().exec();
            return usecases;
        } catch (error) {
            console.error('Error while retrieving use cases:', error);
            return null;
        }
    }


    public async usecase_add_new_usecase(usecase: UsecaseDocument): Promise<UsecaseDocument | null> {
        try {
            const newUsecase = await usecase.save();
            return newUsecase;
        } catch (error) {
            console.error('Error while saving use case:', error);
            return null;
        }
    }

}