import { Injectable } from '@nestjs/common';

@Injectable()
export class VoteSubjectsService {
  async findAll() {
    return dummy;
  }

  async findById(id: string) {
    return dummy.find((item) => item.id === id) ?? null;
  }
}

const dummy = [
  {
    id: 'a',
    title: '테스트 제목 1',
    agreeDescription: '찬성a',
    oppositeDescription: '반대a',
    voteAgreeCount: 1590,
    voteOppositeCount: 590,
  },
  {
    id: 'b',
    title: '테스트 제목 2',
    agreeDescription: '찬성b',
    oppositeDescription: '반대b',
    voteAgreeCount: 159080,
    voteOppositeCount: 10,
  },
  {
    id: 'c',
    title: '테스트 제목 3',
    agreeDescription: '찬성c',
    oppositeDescription: '반대c',
    voteAgreeCount: 12,
    voteOppositeCount: 0,
  },
];
