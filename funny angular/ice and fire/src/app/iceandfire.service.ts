import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http'; 

import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { icefire } from './icefire';
import { icefire_books } from './icefire_books';
import { icefire_characters } from './icefire_characters';


@Injectable()

// @Injectable({
//   providedIn: 'root'
// })

export class IceandfireService {


  private baseUrl = "https://www.anapioficeandfire.com/api";

  private booksResponse;
  private charactersResponse:any={};
  private housesResponse;

  constructor( public _http:HttpClient ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

    //method to return all urls
    public getIceAndFire():Observable<HttpResponse<icefire>>{

      return this._http.get<icefire>(this.baseUrl, {observe: 'response'});      
      
     }

    // public getIceAndFire(){

    //   return this._http.get<icefire>(this.baseUrl);      
      
    //  }

    public getBooks(booksUrl){
      this.booksResponse =  this._http.get(booksUrl+'?page=1&pageSize=12');
      
      return this.booksResponse;
    }
    public getCharacters(charactersUrl){
      this.charactersResponse =  this._http.get(charactersUrl+'?page=1&pageSize=50');
      
      return this.charactersResponse;
    }
    public getHouses(housesUrl){
      this.housesResponse =  this._http.get(housesUrl+'?page=1&pageSize=50');
      
      return this.housesResponse;
    }



    public getBookDetails(bookId){
      let response =  this._http.get(this.baseUrl+'/books/'+bookId);
      
      return response;
    }
    public getCharacterDetails(characterId){
      let response =  this._http.get(this.baseUrl+'/characters/'+characterId);
      
      return response;
    }
    public getHouseDetails(houseId){
      let response =  this._http.get(this.baseUrl+'/houses/'+houseId);
      
      return response;
    }

    // public getBooks(bookUrl):Observable<HttpResponse<icefire_books>>{
     
    //   this.booksResponse =  this._http.get<icefire_books>(bookUrl+'?page=1&pageSize=12', {observe: 'response'});
    //   //console.log(this.response);
    //   return this.booksResponse;
      
    // }

    // public getCharacters(charactersUrl):Observable<HttpResponse<icefire_characters>>{

    //   let response;
   
    //   return response = this._http.get<icefire_characters>(charactersUrl+'?page=1&pageSize=50', {observe: 'response'});

    //     //this.charactersResponse = Object.assign(this.charactersResponse,response);
        
    //   }
      
    //   //return this.charactersResponse;
      
    // }
     
  }
