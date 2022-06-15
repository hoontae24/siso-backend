import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoteSubject } from '../entity/vote-subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VoteSubject])],
})
export class VoteSubjectModule {}
