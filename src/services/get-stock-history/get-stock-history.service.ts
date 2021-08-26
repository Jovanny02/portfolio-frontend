import { Injectable } from '@angular/core';
import { StockHistoricalData } from 'src/app/util/StockHistoricalData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStockHistoryService {
  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';
  constructor(private http: HttpClient) { }


  getStockHistory(stockID: String): Observable<StockHistoricalData> {
    console.log("get stock history  " + stockID)
    return this.http.get<StockHistoricalData>(this.url + 'investments/historical/' + stockID);
  }


}
