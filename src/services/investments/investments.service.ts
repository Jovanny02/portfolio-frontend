import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketTopMoverI } from 'src/app/util/MarketTopMover';
import { Observable } from 'rxjs';
import {CashAccountI} from "../../app/util/CashAccount";
import {InvestmentsI} from "../../app/util/Investments";

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {

  constructor(private http: HttpClient) { }

  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';

  getInvestment(): Observable<InvestmentsI[]> {
    return this.http.get<InvestmentsI[]>(this.url + 'investments/userid');
  }

}
