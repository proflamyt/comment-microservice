import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    PrismaModule, CommentModule],
 
})
export class AppModule {}
