import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(name: string, password: string): Promise<any>;
    login(user: any): Promise<any>;
    register(userData: {
        name: string;
        password: string;
    }): Promise<any>;
}
