import { Prisma, PrismaClient } from ".prisma/client";
import prisma from "../../../../../client";
import IUsersRepository, {
  ICreateUsers,
  IDataToUpdate,
  User,
} from "../IUsersRepository";

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

  async update({ name, email, userId }: IDataToUpdate): Promise<User> {
    const updatedUser = await this.repository.update({
      data: {
        name,
        email,
      },
      where: {
        id: userId,
      },
    });

    return updatedUser;
  }
}

export default UsersRepository;
