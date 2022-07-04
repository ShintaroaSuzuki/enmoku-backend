import { Module } from '@nestjs/common';
import { ConcertResolver } from './concert.resolver';
import { ConcertService } from './concert.service';

@Module({
  providers: [ConcertResolver, ConcertService],
})
export class ConcertModule {}
