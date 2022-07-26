import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class VoteSubject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, length: 100 })
  title!: string;

  @CreateDateColumn({ nullable: false })
  created!: Date;

  @UpdateDateColumn({ nullable: true, default: null })
  updated?: Date;

  @Column({ nullable: false })
  agree_description!: string;

  @Column({ nullable: false })
  opposite_description!: string;

  @Column({ nullable: false, default: 0 })
  vote_agree_count!: number;

  @Column({ nullable: false, default: 0 })
  vote_opposite_count!: number;

  @Column({ nullable: false, default: 0 })
  vote_count!: number;
}
