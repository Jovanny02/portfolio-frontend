import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Investments } from '../util/Investments';

@Component({
  selector: 'app-investment-accounts',
  templateUrl: './investment-accounts.component.html',
  styleUrls: ['./investment-accounts.component.css']
})
export class InvestmentAccountsComponent implements OnInit, OnChanges {


  @Input() investments:Investments[] = []

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
  }

}
