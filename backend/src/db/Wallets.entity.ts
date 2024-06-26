//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Wallets')
export class WalletsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  userId: number;

  @Column('real', { nullable: true })
  balance: number;

  @Column('text', { nullable: true })
  currency: string;

  @Column('date', { nullable: true })
  lastTransactionDate: Date;
}
