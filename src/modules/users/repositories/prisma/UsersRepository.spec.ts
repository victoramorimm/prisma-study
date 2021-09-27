import { prisma } from ".prisma/client";
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

  it("should be able to update a new user", async () => {
    const dataToCreateUser = {
      id: 1,
      name: "Victor",
      email: "teste@teste.com",
    };

    prismaMock.user.create.mockResolvedValueOnce(dataToCreateUser);

    const usersRepository = new UsersRepository();

    const createdUser = await usersRepository.create(dataToCreateUser);

    const updatedMockUser = {
      id: 1,
      name: "Victor Atualizado",
      email: "newEmail@teste.com",
    };

    prismaMock.user.update.mockResolvedValueOnce(updatedMockUser);

    const updatedUser = await usersRepository.update({
      name: "Victor Atualizado",
      email: "newEmail@teste.com",
      userId: createdUser.id,
    });

    expect(updatedUser).toEqual({
      id: 1,
      name: "Victor Atualizado",
      email: "newEmail@teste.com",
    });
  });
});
