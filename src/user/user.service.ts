import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    const result = await prisma.user.findMany({ include: { concerts: true } });
    return result;
  }

  async getUser(id: string): Promise<User> {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        concerts: true,
      },
    });
    if (!result) throw new NotFoundException();
    return result;
  }

  async createUser({
    id,
    name,
    avatar,
  }: {
    id: string;
    name: string;
    avatar: string;
  }): Promise<User> {
    const result = await prisma.user.create({
      data: {
        id,
        name,
        avatar,
      },
    });
    return result;
  }

  async updateUser({
    id,
    name,
    description,
  }: {
    id: string;
    name: string;
    description: string;
  }) {
    const result = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });
    if (!result) throw new NotFoundException();
    return result;
  }

  async deleteUser({ id }: { id: string }): Promise<User> {
    const result = await prisma.user.delete({
      where: {
        id,
      },
    });
    if (!result) throw new NotFoundException();
    return result;
  }
}
