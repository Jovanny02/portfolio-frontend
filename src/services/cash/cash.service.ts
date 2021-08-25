import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketTopMoverI } from 'src/app/util/MarketTopMover';
import { Observable } from 'rxjs';
import {CashAccountI} from "../../app/util/CashAccount";

@Injectable({
  providedIn: 'root'
})
export class CashAccountService {

  constructor(private http: HttpClient) { }

  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';

  // Todo: update the userId from localStorage.get('userId')
  userId: string = '1';

  getCashAmount(): Observable<CashAccountI[]> {
    return this.http.get<CashAccountI[]>(this.url + 'cashaccount/' + this.userId);
  }

}
