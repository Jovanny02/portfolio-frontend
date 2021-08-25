import { Component, OnInit } from '@angular/core';
import { UserIncomeService } from 'src/services/user-income/user-income.service';

@Component({
  selector: 'app-user-income',
  templateUrl: './user-income.component.html',
  styleUrls: ['./user-income.component.css']
})
export class UserIncomeComponent implements OnInit {
  constructor(private userIncomeService: UserIncomeService) { }

  period: string = 'week';
  change: number = 0;

  ngOnInit(): void {
    this.updateChange();
    
  }

  updateChange() {
    this.userIncomeService.getUserIncome(this.period)
    .subscribe((data) => {
      this.change = data;
    });
  }

  selectChangeHandler (event: any) {
    this.period = event.target.value;
    this.updateChange();
  }
}
