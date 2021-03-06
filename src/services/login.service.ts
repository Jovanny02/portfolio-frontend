import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  attemptLogin(id:number){
    let body = `{"id": "${id}"}`
    console.log(body)
    console.log(`http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/user/login`)
    return this.http.post(`http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/user/login`, body).pipe(catchError(this.handleError))

  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


}
