import { Injectable } from '@nestjs/common';
import { Concert } from './concert.model';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ConcertService {
  async getConcerts(): Promise<Concert[]> {
    return prisma.concert.findMany({ include: { notes: true, user: true } });
  }

  async getConcert({ id }: { id: string }): Promise<Concert> {
    return prisma.concert.findUnique({
      where: { id },
      include: { notes: true, user: true },
    });
  }

  async createConcert({
    title,
    date,
    userId,
  }: {
    title: string;
    date: string;
    userId: string;
  }): Promise<Concert> {
    const result = await prisma.concert.create({
      data: {
        title,
        date,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return result;
  }
}
