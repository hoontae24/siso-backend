import { VoteSubject } from 'src/vote-subjects/entities/vote-subject.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export class CreateInitialVoteSubject implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(VoteSubject)
      .values([
        {
          id: '1',
          title: '둘 중에 더 가기 무서운 여행은?',
          createdAt: `${new Date()}`,
          agree_description: '김정은과 미국 여행',
          opposite_description: '트럼프와 북한 여행',
          vote_agree_count: 10,
          vote_opposite_count: 10,
          vote_count: 20,
        },
        {
          id: '2',
          title: '닭이 먼저냐 달걀이 먼저냐',
          createdAt: `${new Date()}`,
          agree_description: '닭',
          opposite_description: '달걀',
          vote_agree_count: 2,
          vote_opposite_count: 2,
          vote_count: 4,
        },
        {
          id: '3',
          title: '누가 더 괘씸하세요?',
          createdAt: `${new Date()}`,
          agree_description:
            '밤새 내 과제를 도와줬지만 결과적으로 과제를 날린 A',
          opposite_description:
            '내가 잠시 자리 비운 사이 과제를 홀라당 다 훔쳐가 제출한 B',
          vote_agree_count: 0,
          vote_opposite_count: 10,
          vote_count: 10,
        },
      ])
      .execute();
  }
}
