import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketTopMoverI } from 'src/app/util/MarketTopMover';

@Injectable({
  providedIn: 'root'
})
export class UserMoversService {

  constructor(private http: HttpClient) { }

  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';

  // Todo: update the userId from localStorage.get('userId')


  getUserMover(userId:number): Observable<MarketTopMoverI[]> {
    return this.http.get<MarketTopMoverI[]>(this.url + 'user/index/' + userId);
  }
}
