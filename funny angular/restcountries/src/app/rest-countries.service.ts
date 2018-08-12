import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http'; 

import {Observable, of, throwError} from 'rxjs';

@Injectable()

// @Injectable({
//   providedIn: 'root' 
// })

export class RestCountriesService {

  private baseUrl = "https://restcountries.eu/rest/v2";

  private completeData:any={};
  // private allCountries:any={};
  // private housesResponse;

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
    public getRegions(all){

      return this._http.get(this.baseUrl+'/'+all);      
      
     }

    public getRegionCountries(regionName){

      return this._http.get(this.baseUrl+'/region/'+regionName);

    }

    public getSingleCountry(countryName){

      return this._http.get(this.baseUrl+'/name/'+countryName+'?fullText=true');

    }

    public getLanguageCountries(languageCode){
      return this._http.get(this.baseUrl+'/lang/'+languageCode);
    }

    public getCurrencyCountries(currencyCode){
      return this._http.get(this.baseUrl+'/currency/'+currencyCode);
    }

}
