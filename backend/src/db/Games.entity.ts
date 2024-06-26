//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Games')
export class GamesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  gameName: string;

  @Column('text', { nullable: true })
  gameType: string;

  @Column('real', { nullable: true })
  minimumBet: number;

  @Column('real', { nullable: true })
  maximumBet: number;

  @Column('text', { nullable: true })
  description: string;
}
