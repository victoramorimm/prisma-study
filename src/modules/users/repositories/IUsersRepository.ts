export interface User {
  id: number;
  name: string | null;
  email: string;
}

export interface ICreateUsers {
  name: string;
  email: string;
}

export interface IDataToUpdate {
  name: string;
  email: string;
  userId: number;
}

interface IUsersRepository {
  create({ name, email }: ICreateUsers): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  update({ name, email, userId }: IDataToUpdate): Promise<User>;
}

export default IUsersRepository;
