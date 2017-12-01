import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from './account';
import { tap } from 'rxjs/operators/tap';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//import { Promise } from 'q';
import 'rxjs/add/operator/toPromise';
import { concat } from 'rxjs/operators/concat';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class AccountService {

  private targetUrl: string = 'http://localhost:8081/accounts';
  constructor(private http: HttpClient) { }

  getAccounts() : Observable<Account[]>{
    return this.http.get<Account[]>(this.targetUrl)
    .pipe(
      tap(heroes => console.log(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }


   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
