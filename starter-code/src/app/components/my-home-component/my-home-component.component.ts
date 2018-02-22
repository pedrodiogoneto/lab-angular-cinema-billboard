import { Component, OnInit } from '@angular/core';
import {  }

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movieList: Array<Object>;

  constructor(private moviesComponent: MoviesComponent) { }

  ngOnInit() {
  }

}
