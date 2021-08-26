import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../util/User';
import {UserMoversComponent} from '../user-movers/user-movers.component'
import {UserIncomeComponent} from '../user-income/user-income.component'
import { Investments } from '../util/Investments';
import { CashAccount } from '../util/CashAccount';

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

  constructor() { }

  ngOnInit(): void {

  }
  @ViewChild(UserMoversComponent) userMoversComp!:UserMoversComponent
  @ViewChild(UserIncomeComponent) userIncomeComp!:UserIncomeComponent


  handleUserChange(user:User){
    //pass new user data to children components
    this.userId = user.id
    this.investmentAccounts = user.investments
    this.cashAccounts = user.cashAccounts
    //console.log(this.userId)
    //call child functions to update
    //NOTE WE DONT HAVE TO CALL THESE SINCE WE ARE USING ngOnChanges
    //this.userMoversComp.updateMoverData()
    //this.userIncomeComp.updateBasedOnNewUser()

  }


}
