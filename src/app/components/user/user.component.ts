import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  job:string; 
  name: string;
  email:string;
  address: Address ; 
  friends: string[];  

  constructor(private dataService:DataService) {
    console.log("User component loaded")
  }

  ngOnInit() {
    this.job = "dev";
    this.name = "johnson";
    this.email = "test@gmail.com"; 
    this.address ={street:"jane", 
      num: 12,
      city: "philly",
      state: "CA", 
    }
    this.friends = ["john", "sally"]; 
  }

  onClick(){
    this.name= "Paul Johnston"
    console.log("CLICKED THE BUTTON ALKDSJF")

  }

  addFriend(friend){
    this.friends.push(friend); 
    return false;
  }

  deleteFriend(friend){
    for(let i=0; i< this.friends.length; i++){
      if (this.friends[i] == friend){
        this.friends.splice(i,1)
      }
    }
  }
}

interface Address{
    street:string,
    num:number; 
    city:string;
    state:string;
}

