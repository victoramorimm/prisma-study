import { PrismaClient } from ".prisma/client";
import IUsersRepository from "../repositories/IUsersRepository";

interface ICreateUserDTO {
  name: string;
  email: string;
}

class CreateUser {
  constructor(private usersRepository: IUsersRepository) {}
  async run({ name, email }: ICreateUserDTO) {
    try {
      if (!name || !email) {
        throw new Error("Required param was not provided");
      }

      const prisma = new PrismaClient();

      const isEmailAlreadyInUse = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (isEmailAlreadyInUse) {
        throw new Error("The e-mail is already in use");
      }

      const user = await this.usersRepository.create({
        name,
        email,
      });

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default CreateUser;
