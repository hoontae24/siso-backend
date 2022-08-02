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
  id!: string;

  @Column({ nullable: false, length: 100 })
  title!: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true, default: null })
  updatedAt?: Date;

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
