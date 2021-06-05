import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './Post';

enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public name: string;

  @Column()
  public nickname: string;

  @Column()
  public birthday: Date;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.Other,
  })
  public gender: Gender;

  @Column()
  public phone: string;

  @OneToMany(() => Post, (post) => post.user)
  public posts: Post[];

  @Column()
  public authTime: Date;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
