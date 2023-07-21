import User, { UserDocument } from '../schemas/UserSchema';

export class UserDBProvider {

    constructor() {}

    public getUser(userId: string): Promise<UserDocument | null> {
        return User.findById(userId).exec();
    }
}