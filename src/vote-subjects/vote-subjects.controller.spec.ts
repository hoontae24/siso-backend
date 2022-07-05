import { Test, TestingModule } from '@nestjs/testing';
import { VoteSubjectsController } from './vote-subjects.controller';
import { VoteSubjectsService } from './vote-subjects.service';

describe('VoteSubjectsController', () => {
  let controller: VoteSubjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoteSubjectsController],
      providers: [VoteSubjectsService],
    }).compile();

    controller = module.get<VoteSubjectsController>(VoteSubjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
