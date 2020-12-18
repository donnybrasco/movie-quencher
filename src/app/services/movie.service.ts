import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

export enum SearchType{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'c90e9e46';

  constructor(private http: HttpClient) {

   }

   searchData(title: string, type: SearchType): Observable<any> {
     console.log(this.url);
     return this.http.get(`${this.url}?apikey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`).pipe(
       map(results => {
          console.log('RAW: ' + results);
          return results['Search']}
         )
     );
   }

   getDetails(id: string){
    return this.http.get(`${this.url}?apiKey=${this.apiKey}&i=${id}&plot=full`);
   }
}
