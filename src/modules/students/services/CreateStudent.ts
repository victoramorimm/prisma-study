import { PrismaClient, Student } from ".prisma/client";

class CreateStudent {
  async run(userId: number): Promise<Student> {
    const prisma = new PrismaClient();

    const student = await prisma.student.create({
      data: {
        userId,
      },
    });

    await prisma.student.findMany();

    return student;
  }
}

export default CreateStudent;
