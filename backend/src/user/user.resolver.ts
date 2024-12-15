import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UpdateResponse } from './user.model';
import { UserInput } from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  getUser(@Args('userId', { type: () => Int }) userId: number): User {
    return this.userService.getUser(userId);
  }

  @Mutation(() => UpdateResponse)
  updateUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('input') input: UserInput,
  ): UpdateResponse {
    return this.userService.updateUser(userId, input);
  }
}
