import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConcertNote } from './concert-note.model';
import { ConcertNoteService } from './concert-note.service';

@Resolver()
export class ConcertNoteResolver {
  constructor(private readonly concertNoteService: ConcertNoteService) {}

  @Query(() => [ConcertNote])
  async concertNotes(): Promise<ConcertNote[]> {
    return this.concertNoteService.findAll();
  }

  @Mutation(() => ConcertNote)
  async createConcertNote(
    @Args({ name: 'concertId', type: () => ID })
    concertId: string,

    @Args({ name: 'body', type: () => String })
    body: string,
  ): Promise<ConcertNote> {
    return this.concertNoteService.create({ concertId, body });
  }
}
