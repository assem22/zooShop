import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Breed} from '../all/model/breed';

@Injectable()
export class BreedService {
  private search: string;
  // private breedName: string;
  // private showChild: boolean;
  // private num: number;

  constructor(private loggingService: LoggingService) {
  }

  // getBreedName(): string{
  //   return  this.breedName;
  // }
  //
  // // tslint:disable-next-line:typedef
  // setBreedName(name: string){
  //   this.breedName = name;
  // }

  getSearchText(): string{
    return this.search;
  }
  // tslint:disable-next-line:typedef
  setSearchText(searchText: string){
    this.search = searchText;
  }
  // tslint:disable-next-line:typedef
 getBreeds(){
    let breeds: Breed[];
    breeds = [
      new Breed(1, 'Breed of pet 1', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(2, 'Breed of pet 2', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(3, 'Breed of pet 3', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(4, 'Breed of pet 4', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(5, 'Breed of pet 5', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(6, 'Breed of pet 6', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
    ];

    this.loggingService.log('List of breeds: ' + breeds);

    return breeds;
 }

  // tslint:disable-next-line:typedef
 getlistOfBreed1() {
   let listOfBreed1: Breed[];
   listOfBreed1 = [
     new Breed(1, 'Certain pet 1', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
     new Breed(2, 'Certain pet 2', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
     new Breed(3, 'Certain pet 3', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
     new Breed(4, 'Certain pet 4', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
     new Breed(5, 'Certain pet 5', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
     new Breed(6, 'Certain pet 6', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
   ];
   this.loggingService.log('List of breeds: ' + listOfBreed1);

   return listOfBreed1;
 }
  // tslint:disable-next-line:typedef
  getlistOfBreed2() {
    let listOfBreed2: Breed[];
    listOfBreed2 = [
      new Breed(1, 'Certain pet 1', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(2, 'Certain pet 2', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(3, 'Certain pet 3', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(4, 'Certain pet 4', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(5, 'Certain pet 5', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(6, 'Certain pet 6', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
    ];
    this.loggingService.log('List of breeds: ' + listOfBreed2);

    return listOfBreed2;
  }
  // tslint:disable-next-line:typedef
  getlistOfBreed3() {
    let listOfBreed3: Breed[];
    listOfBreed3 = [
      new Breed(1, 'Certain pet 1', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(2, 'Certain pet 2', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(3, 'Certain pet 3', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(4, 'Certain pet 4', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(5, 'Certain pet 5', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(6, 'Certain pet 6', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
    ];
    this.loggingService.log('List of breeds: ' + listOfBreed3);

    return listOfBreed3;
  }
  // tslint:disable-next-line:typedef
  getlistOfBreed4() {
    let listOfBreed4: Breed[];
    listOfBreed4 = [
      new Breed(1, 'Certain pet 1', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(2, 'Certain pet 2', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(3, 'Certain pet 3', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(4, 'Certain pet 4', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(5, 'Certain pet 5', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(6, 'Certain pet 6', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
    ];
    this.loggingService.log('List of breeds: ' + listOfBreed4);

    return listOfBreed4;
  }
  // tslint:disable-next-line:typedef
  getlistOfBreed5() {
    let listOfBreed5: Breed[];
    listOfBreed5 = [
      new Breed(1, 'Certain pet 1', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(2, 'Certain pet 2', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(3, 'Certain pet 3', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(4, 'Certain pet 4', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(5, 'Certain pet 5', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(6, 'Certain pet 6', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
    ];
    this.loggingService.log('List of breeds: ' + listOfBreed5);

    return listOfBreed5;
  }
  // tslint:disable-next-line:typedef
  getlistOfBreed6() {
    let listOfBreed6: Breed[];
    listOfBreed6 = [
      new Breed(1, 'Certain pet 1', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(2, 'Certain pet 2', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(3, 'Certain pet 3', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(4, 'Certain pet 4', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(5, 'Certain pet 5', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
      new Breed(6, 'Certain pet 6', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
    ];
    this.loggingService.log('List of breeds: ' + listOfBreed6);

    return listOfBreed6;
 }
}
