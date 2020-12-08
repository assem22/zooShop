import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Breed} from '../all/model/breed';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../all/model/user';

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

  getBreeds(breed: number): Observable<any> {
    return this.http.get<Breed[]>(`${this.apiurl}breed/?breedId=${breed}`);
  }

  getBreedById(id: number): Observable<Breed>{
    return this.http.get<Breed>(`${this.apiurl}breed/${id}`);
  }

  addToBasket(pet: Breed): Observable<any> {
    return this.http.post<Breed>(`${this.apiurl}basket`, pet);
  }
  getBasket(): Observable<any> {
    return this.http.get<Breed[]>(`${this.apiurl}basket`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiurl}basket/${id}`);
  }

  addToFavorite(pet: Breed): Observable<any> {
    return this.http.post<Breed>(`${this.apiurl}favorite`, pet);
  }
  getFavorite(): Observable<any> {
    return this.http.get<Breed[]>(`${this.apiurl}breed/?likeStatus=true`);
  }

  // deleteFromFavorite(id: number): Observable<any> {
  //   return this.http.delete(`${this.apiurl}favorite/${id}`);
  // }

  updatePet(pet: Breed): Observable<any> {
    return this.http.put<any>(this.apiurl + 'breed/' + pet.id , pet);
  }
}
