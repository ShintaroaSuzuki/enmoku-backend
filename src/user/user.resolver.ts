import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { nullable: 'items' })
  users() {
    return this.userService.getUsers();
  }

  @Query(() => User)
  user(@Args('id', { type: () => ID }) id: string) {
    return this.userService.getUser(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args({ name: 'id', type: () => ID })
    id: string,

    @Args({ name: 'name', type: () => String })
    name: string,

    @Args({ name: 'avatar', type: () => String })
    avatar: string,
  ) {
    return this.userService.createUser({ id, name, avatar });
  }

  @Mutation(() => User)
  async updateUser(
    @Args({ name: 'id', type: () => ID })
    id: string,

    @Args({ name: 'name', type: () => String })
    name: string,

    @Args({ name: 'description', type: () => String })
    description: string,
  ) {
    return this.userService.updateUser({ id, name, description });
  }

  @Mutation(() => User)
  async deleteUser(
    @Args({ name: 'id', type: () => ID })
    id: string,
  ) {
    return this.userService.deleteUser({ id: id });
  }
}
