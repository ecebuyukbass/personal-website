import { CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const token = request.headers['x-admin-token'];

    if (!token || token !== process.env.ADMIN_TOKEN) {
      throw new UnauthorizedException('Admin access only');
    }

    return true;
  }
}
