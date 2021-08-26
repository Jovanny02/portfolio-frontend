import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../util/User';
import {UserMoversComponent} from '../user-movers/user-movers.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Current User Properties
  userId:number = 0;


  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(UserMoversComponent) userMoversComp!:UserMoversComponent

  handleUserChange(user:User){
    //pass new user data to children components
    this.userId = user.id
    this.userMoversComp.updateMoverData()


  }


}
