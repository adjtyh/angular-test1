import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

  constructor(){
    
    
  }

  ngOnInit(){
      
  }

  title = 'Tour of Heroes';

}
