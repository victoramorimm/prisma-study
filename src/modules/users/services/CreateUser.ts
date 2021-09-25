import { PrismaClient } from "@prisma/client";

interface ICreateUserDTO {
  name: string;
  email: string;
}

class CreateUser {
  async run({ name, email }: ICreateUserDTO) {
    try {
      if (!name || !email) {
        throw new Error("Required param was not provided");
      }

      const prisma = new PrismaClient();

      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default CreateUser;