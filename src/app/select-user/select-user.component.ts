import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  users = [
    {"firstName": "Hung", "lastName": "Nguyen", "id":1},
    {"firstName": "Jovanny", "lastName": "Vera", "id":2},
    {"firstName": "Jessica", "Phelan": "Nguyen", "id":3}
  ]

  selectedUser:String = ""

  constructor() { }

  ngOnInit(): void {
    this.selectedUser = this.users[0].firstName + " " + this.users[0].lastName + " - " + this.users[0].id;
  }



}
