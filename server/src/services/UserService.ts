import User, { UserDocument } from '../schemas/UserSchema';
import {UserDBProvider} from '../providers/userDBProvider';

export class UserService {
  private userDBProvider: UserDBProvider;

  constructor() {
    this.userDBProvider = new UserDBProvider();
  }


  public async getUser(userId: string): Promise<UserDocument | null> {
    const user = await this.userDBProvider.getUser(userId);
    if (!user) {
      throw new Error('User not exists!')
    }
    return user
  }
}
