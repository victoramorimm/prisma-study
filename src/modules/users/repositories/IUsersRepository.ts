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
}

export default IUsersRepository;
