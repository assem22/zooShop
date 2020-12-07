import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Breed} from '../all/model/breed';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BreedService {
  apiurl = 'http://localhost:3000/';

  private search: string;

  constructor(private loggingService: LoggingService, private http: HttpClient) {
  }

  getSearchText(): string{
    return this.search;
  }
  // tslint:disable-next-line:typedef
  setSearchText(searchText: string){
    this.search = searchText;
  }

  getBreeds(): Observable<any> {
    return this.http.get<Breed[]>(this.apiurl + 'petBreed');
  }

  getListOfBreed1(): Observable<any> {
    return  this.http.get<Breed[]>(this.apiurl + 'listOfBreed1');
  }

  getListOfBreed2(): Observable<any> {
    return  this.http.get<Breed[]>(this.apiurl + 'listOfBreed2');
  }

  getListOfBreed3(): Observable<any> {
    return  this.http.get<Breed[]>(this.apiurl + 'listOfBreed3');
  }

  getListOfBreed4(): Observable<any> {
    return  this.http.get<Breed[]>(this.apiurl + 'listOfBreed4');
  }

  getListOfBreed5(): Observable<any> {
    return  this.http.get<Breed[]>(this.apiurl + 'listOfBreed5');
  }

  getListOfBreed6(): Observable<any> {
    return  this.http.get<Breed[]>(this.apiurl + 'listOfBreed6');
  }
}




// tslint:disable-next-line:typedef
// getBreeds(){
//    let breeds: Breed[];
//    breeds = [
//      new Breed(1, 'Breed of pet 1', 'https://mdbootstrap.com/img/Photos/Others/img3.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
//      new Breed(2, 'Breed of pet 2', 'https://mdbootstrap.com/img/Photos/Others/img9.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
//      new Breed(3, 'Breed of pet 3', 'https://mdbootstrap.com/img/Photos/Others/img4.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
//      new Breed(4, 'Breed of pet 4', 'https://mdbootstrap.com/img/Photos/Others/img5.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
//      new Breed(5, 'Breed of pet 5', 'https://mdbootstrap.com/img/Photos/Others/img10.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.'),
//      new Breed(6, 'Breed of pet 6', 'https://mdbootstrap.com/img/Photos/Others/img8.jpg', 'A pet, or companion animal, is an animal kept primarily for a person\'s company or entertainment rather than as a working animal, livestock or a laboratory animal.')
//    ];
//
//    this.loggingService.log('List of breeds: ' + breeds);
//
//    return breeds;
// }
