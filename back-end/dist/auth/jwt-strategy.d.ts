import { Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(info: any): Promise<{
        _id: any;
        name: any;
        tasks: any;
    }>;
}
export {};
