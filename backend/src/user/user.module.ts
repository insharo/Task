import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolver, UserService],
  // exports: [UserService], // Export if needed in other modules
})
export class UserModule {}
