import { Prisma, PrismaClient } from ".prisma/client";
import prisma from "../../../../../client";
import IUsersRepository, { ICreateUsers, User } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  repository: Prisma.UserDelegate<any>;

  constructor() {
    this.repository = prisma.user;
  }

  async create({ name, email }: ICreateUsers): Promise<User> {
    const user = await this.repository.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    return user;
  }
}

export default UsersRepository;
