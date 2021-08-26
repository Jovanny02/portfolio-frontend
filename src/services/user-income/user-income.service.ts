import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIncomeService {

  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';

  constructor(private http: HttpClient) { }

  // Todo: update the userId from localStorage.get('userId')


  getUserIncome(period: string, userId: number): Observable<number> {
    console.log("get income with id " + userId)
    return this.http.get<number>(this.url + 'investments/' + period + '/' + userId);
  }

  getUserNetworth(userId: number): Observable<number> {
    console.log("get net worth with id " + userId)
    return this.http.get<number>(this.url + 'user/networth/' + userId);
  }
}
