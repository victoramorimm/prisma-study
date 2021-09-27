export interface User {
  id: number;
  name: string | null;
  email: string;
}

export interface ICreateUsers {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUsers): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

export default IUsersRepository;
