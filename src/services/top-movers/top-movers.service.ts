import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketTopMoverI } from 'src/app/util/MarketTopMover';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopMoversService {

  constructor(private http: HttpClient) { }

  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';

  getIndexMovers(): Observable<MarketTopMoverI[]> {
    return this.http.get<MarketTopMoverI[]>(this.url + 'market/index');
  }

  getBondMovers() {
    return this.http.get(this.url + 'market/bond');
  }
}
