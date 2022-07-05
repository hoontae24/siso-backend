import { Module } from '@nestjs/common';
import { VoteSubjectsService } from './vote-subjects.service';
import { VoteSubjectsController } from './vote-subjects.controller';

@Module({
  controllers: [VoteSubjectsController],
  providers: [VoteSubjectsService],
})
export class VoteSubjectsModule {}
