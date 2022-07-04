import { Module } from '@nestjs/common';
import { ConcertNoteResolver } from './concert-note.resolver';
import { ConcertNoteService } from './concert-note.service';

@Module({
  providers: [ConcertNoteResolver, ConcertNoteService],
})
export class ConcertNoteModule {}
