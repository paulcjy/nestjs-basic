import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class BoardsService {
	constructor(
		@InjectRepository(Post)
		private postsRepository: Repository<Post>,
	) {}

	create(createBoardDto: CreateBoardDto) {
		return 'This action adds a new board';
	}

	findAll(): Promise<Post[]> {
		return this.postsRepository.find();
	}

	findOne(id: number) {
		return `This action returns a #${id} board`;
	}

	update(id: number, updateBoardDto: UpdateBoardDto) {
		return `This action updates a #${id} board`;
	}

	remove(id: number) {
		return `This action removes a #${id} board`;
	}
}
