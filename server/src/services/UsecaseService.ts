import Usecase, { UsecaseDocument } from '../schemas/UsecaseSchema';
import { UsecaseDBProvider } from '../providers/usecaseDBProvider';

export class UsecaseService {
    private usecaseDBProvider: UsecaseDBProvider;

    constructor() {
        this.usecaseDBProvider = new UsecaseDBProvider();
    }


    public async useCase_getAll(): Promise<UsecaseDocument[] | null> {
        try {
            const usecase = await this.usecaseDBProvider.useCase_getAll();
            return usecase

        } catch {
            // if (!usecase) {
            throw new Error('User not exists!')
            // }
        }
        // const usecase = await this.usecaseDBProvider.useCase_getAll();
        // if (!usecase) {
        //     throw new Error('User not exists!')
        // }
        // return usecase
    }
    public async usecase_add_new_usecase(usecase: UsecaseDocument): Promise<UsecaseDocument | null> {
        const newUsecase = await this.usecaseDBProvider.usecase_add_new_usecase(usecase);
        if(!newUsecase) {
            throw Error('Unable to add new usecase')
        }
        return newUsecase;
    }
   
}
    
