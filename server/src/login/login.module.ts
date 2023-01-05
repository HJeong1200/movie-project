import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secret: '1234',
      signOptions: { expiresIn: '1y' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy],
})
export class LoginModule {}
