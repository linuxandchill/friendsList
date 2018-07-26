import { Injectable } from '@angular/core';
//import {Http} from '@angular/http'; 
export class DataService {

  constructor() {
    console.log("data service connected")
  }

  getFriends(){
    return ["jally", "joseph", "daisy"]
  }

}
