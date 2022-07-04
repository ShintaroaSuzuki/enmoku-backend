import { Injectable } from '@nestjs/common';
import { ConcertNote } from './concert-note.model';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ConcertNoteService {
  async findAll(): Promise<ConcertNote[]> {
    return prisma.concertNote.findMany();
  }

  async create({
    concertId,
    body,
  }: {
    concertId: string;
    body: string;
  }): Promise<ConcertNote> {
    return await prisma.concertNote.create({
      data: {
        body,
        Concert: {
          connect: {
            id: concertId,
          },
        },
      },
      include: {
        Concert: true,
      },
    });
  }
}
