import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board_total extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('int')
	post_id: number;
}
