import {Breed} from './breed';

export class User{
  id: number;
  name: string;
  email: string;
  password: string;
  favList: Breed[];
  basket: Breed[];

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.favList = [];
    this.basket = [];
  }
}
