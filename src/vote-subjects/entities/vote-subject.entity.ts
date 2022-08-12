import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class VoteSubject {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, length: 100 })
  title!: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true, default: null })
  deletedAt?: Date;

  @Column({ name: 'agree_description', nullable: false })
  agreeDescription!: string;

  @Column({ name: 'opposite_description', nullable: false })
  oppositeDescription!: string;

  @Column({ name: 'vote_agree_count', nullable: false, default: 0 })
  voteAgreeCount!: number;

  @Column({ name: 'vote_opposite_count', nullable: false, default: 0 })
  voteOppositeCount!: number;

  @Column({ name: 'vote_count', nullable: false, default: 0 })
  voteCount!: number;
}
