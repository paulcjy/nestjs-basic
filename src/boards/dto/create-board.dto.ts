export class CreateBoardDto {
	title: string;
	content: string;
	author_id: number; // 임시로 사용
	anonymous: boolean;
}
