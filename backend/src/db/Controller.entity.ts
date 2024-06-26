//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Controller')
export class ControllerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  controllerId: string;

  @Column('integer', { nullable: true })
  gameId: number;

  @Column('integer', { nullable: true })
  userId: number;

  @Column('real', { nullable: true })
  betAmount: number;

  @Column('real', { nullable: true })
  winAmount: number;

  @Column('text', { nullable: true })
  outcome: string;

  @Column('date', { nullable: true })
  dateTime: Date;
}
