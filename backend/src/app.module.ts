import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}


