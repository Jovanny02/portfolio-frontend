import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../util/User';
import {GetUsersService} from '../../services/get-users/get-users.service'


@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  //event to emit When user changes to notify the rest of the dashboard
  @Output() userChangedEvent:EventEmitter<User> = new EventEmitter()

  users:User[] = [
    {
      id: 1,
      firstname: "hung",
      lastname: "nguyen",
      username: "hungnguyen",
      password: "123456",
      cashAccounts: [
      {
      id: 1,
      userId: 1,
      accountName: "Citi",
      value: 3127.12
      },
      {
      id: 2,
      userId: 1,
      accountName: "Well Fargo",
      value: 1223.12
      },
      {
      id: 3,
      userId: 1,
      accountName: "Fidelity Cash",
      value: 6734.9
      }
      ],
      investments: [
      {
      id: 1,
      userId: 1,
      stockName: "TESLA",
      quantity: 31.25,
      stockSymbol: "TSLA"
      },
      {
      id: 2,
      userId: 1,
      stockName: "Apple",
      quantity: 20,
      stockSymbol: "AAPL"
      },
      {
      id: 3,
      userId: 1,
      stockName: "Citi",
      quantity: 200,
      stockSymbol: "C"
      }
      ]
      }
    ]

  selectedUser?:User

  constructor(private getUsersService:GetUsersService) { }

  ngOnInit(): void {
    this.getUsersService.getAllUsers().subscribe((data) => {
      this.users = data  
    },
    (err) =>{
      console.log(err)
    })
    this.selectedUser = this.users[0]
    this.userChangedEvent.emit(this.selectedUser)
  }

  updateSelected(selected:any){
    let startIndex = selected.target.value.lastIndexOf('-')+1
    let tempID:number = selected.target.value.substring(startIndex)
    this.selectedUser = this.users.find(user => user.id == tempID);
    
    this.userChangedEvent.emit(this.selectedUser)
    console.log(this.selectedUser)
  }



}
