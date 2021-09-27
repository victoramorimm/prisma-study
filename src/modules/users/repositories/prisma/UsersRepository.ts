import { Prisma, PrismaClient } from ".prisma/client";
import IUsersRepository, { ICreateUsers, User } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  repository: Prisma.UserDelegate<any>;

  constructor() {
    const prisma = new PrismaClient();

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
}

export default UsersRepository;
