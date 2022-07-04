import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Concert } from './concert.model';
import { ConcertService } from './concert.service';

@Resolver()
export class ConcertResolver {
  constructor(private concertService: ConcertService) {}

  @Mutation(() => Concert)
  async createConcert(
    @Args({ name: 'title', type: () => String })
    title: string,

    @Args({ name: 'date', type: () => Date })
    date: string,

    @Args({ name: 'userId', type: () => String })
    userId: string,
  ) {
    return this.concertService.createConcert({ title, date, userId });
  }

  @Query(() => [Concert])
  async concerts() {
    return this.concertService.getConcerts();
  }

  @Query(() => Concert)
  async concert(
    @Args({ name: 'id', type: () => ID })
    id: string,
  ) {
    return this.concertService.getConcert({ id });
  }
}
