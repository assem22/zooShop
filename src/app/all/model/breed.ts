export class Breed{
  id: number;
  breedId: number;
  likeStatus: boolean;
  category: string;
  name: string;
  image: string;
  information: string;
  cost: number;


  constructor(id: number, breedId: number, category: string, name: string, image: string, information: string, cost: number) {
    this.id = id;
    this.breedId = breedId;
    this.likeStatus = false;
    this.category = category;
    this.name = name;
    this.image = image;
    this.information = information;
    this.cost = cost;
  }
}
