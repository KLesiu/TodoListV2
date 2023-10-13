import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local-strategy';
import { PassportModule } from '@nestjs/passport/dist';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './jwt-strategy';

@Module({
 
  imports:[UsersModule,PassportModule,JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions:{expiresIn:'100000s'},
  })],
  providers: [AuthService,LocalStrategy ,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
