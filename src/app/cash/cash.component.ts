import { Component, OnInit } from '@angular/core';
import {CashAccountService} from "../../services/cash/cash.service";
import {CashAccountI} from "../util/CashAccount";
//import {CashAccountI} from "../util/CashAccount";

@Component({
  selector: 'app-cash-investments',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})

export class CashComponent implements OnInit {

  cashData: CashAccountI[] = [];
  constructor(private cashDataService: CashAccountService) { }

  ngOnInit(): void {
    this.cashDataService.getCashAmount()
      .subscribe((data: CashAccountI[]) => {
        this.cashData = data;
        console.log(this.cashData);
      });
  }

}
