import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Data } from './interface';


@Injectable()
export class CommentService {
    constructor(
        private prisma:PrismaService
    ){}

    getNumbersOfComments(title: string): PrismaPromise<number>{
        return this.prisma.comments.count({
            where: {
              title: title,
            },
          })
    }

    // adding and listing anonymous comments for a book
    getComments(){
        return this.prisma.comments.findMany({
            orderBy: {
                createdAt: "desc"
              }
        })
    }

    async addComments({ data }: { data: Data; }){

        return await this.prisma.comments.create({
            data: {
              title: data.title,
              body: data.body,
              ip: data.ip
            },
          })

        

    }
}
