import { Test, TestingModule } from '@nestjs/testing';
import { ConcertNoteService } from './concert-note.service';

describe('ConcertNoteService', () => {
  let service: ConcertNoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcertNoteService],
    }).compile();

    service = module.get<ConcertNoteService>(ConcertNoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
