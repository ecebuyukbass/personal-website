import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() body: any) {
    return this.articlesService.create(body);
  }

  @Get()
  findAll() {
    return this.articlesService.findAllPublished();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.articlesService.findBySlug(slug);
  }
}
