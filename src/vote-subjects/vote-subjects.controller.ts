import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { VoteSubjectsService } from './vote-subjects.service';

@Controller('vote-subjects')
export class VoteSubjectsController {
  constructor(private readonly voteSubjectService: VoteSubjectsService) {}

  @Get()
  async findAll() {
    const voteSubjects = await this.voteSubjectService.findAll();

    return {
      voteSubjects,
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const voteSubject = await this.voteSubjectService.findById(id);
    if (!voteSubject) {
      throw new NotFoundException(`Not found vote-subject by id "${id}"`);
    }

    return {
      voteSubject,
    };
  }
}
