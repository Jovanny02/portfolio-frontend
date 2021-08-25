import { Component, OnInit } from '@angular/core';
import { TopMoversService } from 'src/services/top-movers/top-movers.service';
import { MarketTopMoverI } from '../util/MarketTopMover';

@Component({
  selector: 'app-top-movers',
  templateUrl: './top-movers.component.html',
  styleUrls: ['./top-movers.component.css']
})
export class TopMoversComponent implements OnInit {

  topMoverData: MarketTopMoverI[] = [];
  constructor(private topMoversService: TopMoversService) { }

  ngOnInit(): void {
    this.topMoversService.getIndexMovers()
    .subscribe((data: MarketTopMoverI[]) => {
      this.topMoverData = data;
      console.log(this.topMoverData);
    });
  }


}
