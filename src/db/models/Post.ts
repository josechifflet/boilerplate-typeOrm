import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: string;
  
  @Column()
  public title: string;

  @Column()
  public content: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}

