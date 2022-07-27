import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VoteSubject } from './entities/vote-subject.entity';

@Injectable()
export class VoteSubjectsService {
  constructor(
    @InjectRepository(VoteSubject)
    private voteSubjectRepository: Repository<VoteSubject>,
  ) {
    this.voteSubjectRepository = voteSubjectRepository;
  }
  async findAll(): Promise<VoteSubject[]> {
    return this.voteSubjectRepository.find();
  }

  async findById(id: number): Promise<VoteSubject | undefined> {
    return this.voteSubjectRepository.findOne({ id });
  }
}
