import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName:String="";
  userStatus:String="User not avaialable"
  constructor() {
   }

  ngOnInit() {
  }
  onCreateUser()
  {
    this.userStatus="User available. User name is "+ this.userName;    
    this.userName="";
  } 

}
