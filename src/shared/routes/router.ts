import { Router } from "express";
import CreateUser from "../../modules/users/services/CreateUser";

const router = Router();

router.post("/users", async function (req, res) {
  try {
    const createUser = new CreateUser();

    const { name, email } = req.body;

    const response = await createUser.run({ name, email });

    return res.status(201).json({ user: response });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

export default router;
