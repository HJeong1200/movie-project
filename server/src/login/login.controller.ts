import { Controller, Post, Req } from '@nestjs/common';
import { LoginService } from './login.service';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Req() request: Request) {
    const { email, password } = request.body;
    return this.loginService.login(email, password);
  }
}
