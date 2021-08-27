import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CashAccount } from '../util/CashAccount';

@Component({
  selector: 'app-cash-accounts',
  templateUrl: './cash-accounts.component.html',
  styleUrls: ['./cash-accounts.component.css']
})
export class CashAccountsComponent implements OnInit, OnChanges {

  @Input() cashAccounts:CashAccount[] = []

  totalValue:number = 0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.cashAccounts == undefined || this.cashAccounts == null)
      return

    this.totalValue = 0;
    for(let i=0; i <this.cashAccounts.length;i++){
      this.totalValue += this.cashAccounts[i].value
    }
  }

  ngOnInit(): void {
  }

}
