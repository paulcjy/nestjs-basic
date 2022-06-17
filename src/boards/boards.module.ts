import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Post])],
	controllers: [BoardsController],
	providers: [BoardsService],
})
export class BoardsModule {}
