import { compileInjectable } from '@angular/compiler';
import { Component, OnInit, Input , SimpleChanges, OnChanges} from '@angular/core';
import { UserIncomeService } from 'src/services/user-income/user-income.service';

@Component({
  selector: 'app-user-income',
  templateUrl: './user-income.component.html',
  styleUrls: ['./user-income.component.css']
})
export class UserIncomeComponent implements OnInit, OnChanges {
  constructor(private userIncomeService: UserIncomeService) { }


  period: string = 'week';
  change: number = 0;
  networth: number = 0;
  @Input() userId:number = 0

  ngOnInit(): void {
   // this.updateBasedOnNewUser()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.userId != undefined)
      this.updateBasedOnNewUser()
  }

  updateBasedOnNewUser(){
    this.updateUserIncome();
    this.updateNetWorth();
  }


  updateNetWorth() {
    this.userIncomeService.getUserNetworth(this.userId)
    .subscribe((data) => {
      console.log(data);
      this.networth = data;
      console.log(this.networth);
    });
  }

  updateUserIncome() {
    this.userIncomeService.getUserIncome(this.period, this.userId)
    .subscribe((data) => {
      this.change = data;
    });
  }

  selectChangeHandler (event: any) {
    this.period = event.target.value;
    this.updateUserIncome();
  }
}
