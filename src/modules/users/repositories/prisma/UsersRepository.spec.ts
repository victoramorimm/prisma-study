import { prismaMock } from "../../../../../singleton";
import UsersRepository from "../prisma/UsersRepository";

describe("Users Repository", () => {
  it("should be able to create a new user", async () => {
    const user = {
      id: 1,
      name: "Victor",
      email: "teste@teste.com",
    };

    prismaMock.user.create.mockResolvedValueOnce(user);

    const usersRepository = new UsersRepository();
    await expect(usersRepository.create(user)).resolves.toEqual({
      id: 1,
      name: "Victor",
      email: "teste@teste.com",
    });
  });
});
