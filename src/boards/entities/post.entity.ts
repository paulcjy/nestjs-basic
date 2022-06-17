import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', length: 100 })
	title: string;

	@Column({ type: 'text' })
	content: string;

	@Column({ type: 'int' })
	author_id: number;

	@Column({ type: 'bool' })
	anonymous: boolean;

	@CreateDateColumn({ type: 'datetime' })
	created_at: Date;

	@Column({ type: 'int', default: 0 })
	view: number;

	@Column({ type: 'int', default: 0 })
	like: number;

	@Column({ type: 'int', default: 0 })
	dislike: number;
}
