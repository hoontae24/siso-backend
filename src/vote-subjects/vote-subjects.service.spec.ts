import { Test, TestingModule } from '@nestjs/testing';
import { VoteSubjectsService } from './vote-subjects.service';

describe('VoteSubjectsService', () => {
  let service: VoteSubjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoteSubjectsService],
    }).compile();

    service = module.get<VoteSubjectsService>(VoteSubjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
