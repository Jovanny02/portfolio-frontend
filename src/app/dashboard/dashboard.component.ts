import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../util/User';
import {UserMoversComponent} from '../user-movers/user-movers.component'
import {UserIncomeComponent} from '../user-income/user-income.component'
import { Investments } from '../util/Investments';
import { CashAccount } from '../util/CashAccount';
import { StockHistoricalData } from '../util/StockHistoricalData';
import { GetStockHistoryService } from 'src/services/get-stock-history/get-stock-history.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Current User Properties
  userId!:number
  cashAccounts!:CashAccount[]
  investmentAccounts!:Investments[]
  stockHistoryData!:StockHistoricalData

  constructor(private stockHistoryService: GetStockHistoryService) { }

  ngOnInit(): void {

  }
  @ViewChild(UserMoversComponent) userMoversComp!:UserMoversComponent
  @ViewChild(UserIncomeComponent) userIncomeComp!:UserIncomeComponent


  handleUserChange(user:User){
    //pass new user data to children components
    this.userId = user.id
    this.investmentAccounts = user.investments
    this.cashAccounts = user.cashAccounts
    this.updateGraph(user.investments[0].stockSymbol)
    //console.log(this.userId)
    //call child functions to update
    //NOTE WE DONT HAVE TO CALL THESE SINCE WE ARE USING ngOnChanges
    //this.userMoversComp.updateMoverData()
    //this.userIncomeComp.updateBasedOnNewUser()


  }

  handleGraphStockChange(stockSymbol:String){
    this.updateGraph(stockSymbol)
  }

  updateGraph(stockSymbol:String){
    this.stockHistoryService.getStockHistory(stockSymbol)
    .subscribe((data: StockHistoricalData) => {
      this.stockHistoryData = data;
      //console.log("Stock history data " + this.stockHistoryData)

    })
  }


}
