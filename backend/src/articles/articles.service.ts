import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './create-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

 create(dto: CreateArticleDto) {
  return this.prisma.article.create({
    data: {
      ...dto,
      status: 'DRAFT',
    },
  });
}

  findAllPublished() {
    return this.prisma.article.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { publishedAt: 'desc' },
    });
  }

  findBySlug(slug: string) {
    return this.prisma.article.findUnique({
      where: { slug },
    });
  }

  publish(id: number) {
    return this.prisma.article.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    });
  }



  async getSidebarData() {
  const articles = await this.prisma.article.findMany({
    where: { status: 'PUBLISHED' },
    select: {
      year: true,
      category: true,
      title: true,
      slug: true,
    },
    orderBy: {
      publishedAt: 'desc',
    },
  });

  const tree: Record<string, Record<string, { title: string; slug: string }[]>> = {};

  for (const article of articles) {
    const year = article.year.toString();
    const category = article.category;

    if (!tree[year]) {
      tree[year] = {};
    }

    if (!tree[year][category]) {
      tree[year][category] = [];
    }

    tree[year][category].push({
      title: article.title,
      slug: article.slug,
    });
  }

  return tree;
}


async findAll() {
  return this.prisma.article.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

async update(id: number, data: any) {
  return this.prisma.article.update({
    where: { id },
    data,
  });
}

async remove(id: number) {
  return this.prisma.article.delete({
    where: { id },
  });
}



}
