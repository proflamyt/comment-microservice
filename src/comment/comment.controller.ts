import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CommentService } from './comment.service';
import { Data } from './interface';

@Controller('comment')
export class CommentController {
    constructor( private commentService: CommentService){}

    @MessagePattern({ cmd: "get_comment" })
    ping(_: any) {
    console.log(_)
      return this.commentService.getComments()
    }

    @MessagePattern({ cmd: "post_comment" })
    createComment(data:Data ) {
        return this.commentService.addComments({ data });
    }

    @MessagePattern({cmd: "get_numbers_of_comments" })
    getNumbersOfComments (data) {

      return this.commentService.getNumbersOfComments(data.name);

    }
}
