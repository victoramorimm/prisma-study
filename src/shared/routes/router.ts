import { Router } from "express";
import CreateStudent from "../../modules/students/services/CreateStudent";
import UsersRepository from "../../modules/users/repositories/prisma/UsersRepository";
import CreateUser from "../../modules/users/services/CreateUser";

const router = Router();

router.post("/users", async function (req, res) {
  try {
    const usersRepository = new UsersRepository();
    const createUser = new CreateUser(usersRepository);

    const { name, email } = req.body;

    const response = await createUser.run({ name, email });

    return res.status(201).json({ user: response });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

router.post("/students/:userId", async function (req, res) {
  try {
    const createStudent = new CreateStudent();

    const { userId } = req.params;

    const response = await createStudent.run(parseInt(userId));

    return res.status(201).json({ student: response });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

export default router;
