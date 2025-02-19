import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VoteSubject } from './entities/vote-subject.entity';

@Injectable()
export class VoteSubjectsService {
  constructor(
    @InjectRepository(VoteSubject)
    private voteSubjectRepository: Repository<VoteSubject>,
  ) {}
  findAll(): Promise<VoteSubject[]> {
    return this.voteSubjectRepository.find();
  }

  async findById(id: string): Promise<VoteSubject | null> {
    const result = await this.voteSubjectRepository.findOne(id);
    return result ?? null;
  }
}
