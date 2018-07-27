import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[]

  constructor(http:Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(resp => {
        //console.log(resp.json())
        this.posts =resp.json(); 
      })

  }

  ngOnInit() {
  }

}
