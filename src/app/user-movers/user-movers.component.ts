import { Component, OnInit, Input } from '@angular/core';
import { UserMoversService } from 'src/services/user-movers/user-movers.service';
import { MarketTopMoverI } from '../util/MarketTopMover';

@Component({
  selector: 'app-user-movers',
  templateUrl: './user-movers.component.html',
  styleUrls: ['./user-movers.component.css']
})
export class UserMoversComponent implements OnInit {

  userMoverData: MarketTopMoverI[] = [];
  @Input() userId:number = 0

  constructor(private userMoversSerive: UserMoversService) { }

  ngOnInit(): void {
    this.updateMoverData()
  }

  updateMoverData(): void{
    this.userMoversSerive.getUserMover(this.userId)
    .subscribe((data: MarketTopMoverI[]) => {
      this.userMoverData = data;
      console.log(this.userMoverData);
    });

  }

}
