import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getUser(req: Request, res: Response): Promise<any> {
    const userId: string = req.params.id;
    const user = await userService.getUser(userId);
    console.log(user);
    res.json(user);
  }
}
