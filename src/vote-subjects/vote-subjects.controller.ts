import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { VoteSubjectsService } from './vote-subjects.service';

@Controller('vote-subjects')
@ApiTags('투표 주제 API')
export class VoteSubjectsController {
  constructor(private readonly voteSubjectService: VoteSubjectsService) {}

  @Get()
  @ApiOperation({
    summary: '투표 주제 목록 조회',
    description: '투표 주제를 목록 형태로 조회한다.',
  })
  async findAll() {
    const voteSubjects = await this.voteSubjectService.findAll();

    return {
      voteSubjects,
    };
  }

  @Get(':id')
  @ApiOperation({
    summary: '투표 주제 조회',
    description: '특정 ID에 대한 투표 주제를 조회한다.',
  })
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
