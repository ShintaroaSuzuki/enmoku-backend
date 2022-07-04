import { Test, TestingModule } from '@nestjs/testing';
import { ConcertResolver } from './concert.resolver';

describe('ConcertResolver', () => {
  let resolver: ConcertResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcertResolver],
    }).compile();

    resolver = module.get<ConcertResolver>(ConcertResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
