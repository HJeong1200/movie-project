import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1234',
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    const user = payload.sub === '0';

    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('인증되지 않은 사용자');
    }
  }
}
