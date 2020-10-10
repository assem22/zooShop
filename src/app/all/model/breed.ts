export class Breed{
  id: number;
  name: string;
  image: string;
  information: string;


  constructor(id: number, name: string, image: string, information: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.information = information;
  }
}
