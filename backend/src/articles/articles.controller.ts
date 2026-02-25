import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { UseGuards } from '@nestjs/common';
import { AdminGuard } from '../auth/admin.guard';
import { CreateArticleDto } from './create-article.dto';


@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

 @UseGuards(AdminGuard)
@Post()
create(@Body() dto: CreateArticleDto) {
  return this.articlesService.create(dto);
}


  @Get('sidebar')
  getSidebar() {
    return this.articlesService.getSidebarData();
  }

  @Get()
  findAll() {
    return this.articlesService.findAllPublished();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.articlesService.findBySlug(slug);
  }

 @UseGuards(AdminGuard)
@Post(':id/publish')
publish(@Param('id') id: string) {
  return this.articlesService.publish(Number(id));
}


@UseGuards(AdminGuard)
@Get('admin/all')
findAllForAdmin() {
  return this.articlesService.findAll();
}


@UseGuards(AdminGuard)
@Put(':id')
update(
  @Param('id') id: string,
  @Body() body: any
) {
  return this.articlesService.update(Number(id), body);
}



@UseGuards(AdminGuard)
@Delete(':id')
remove(@Param('id') id: string) {
  return this.articlesService.remove(Number(id));
}



}
