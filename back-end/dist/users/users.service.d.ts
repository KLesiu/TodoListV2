import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findOneUser(name: string): Promise<User | any>;
    createUser(userData: any): Promise<any>;
}
