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
  userId: string = '1';

  getUserIncome(period: string): Observable<number> {
    return this.http.get<number>(this.url + 'investments/' + period + '/' + this.userId);
  }
}
