import { Test, TestingModule } from '@nestjs/testing';
import { ConcertNoteResolver } from './concert-note.resolver';

describe('ConcertNoteResolver', () => {
  let resolver: ConcertNoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcertNoteResolver],
    }).compile();

    resolver = module.get<ConcertNoteResolver>(ConcertNoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
