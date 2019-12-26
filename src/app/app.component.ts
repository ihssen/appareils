import { Component } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // isAuth = false;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';


  constructor() {
    // setTimeout(() => {
    //   this.isAuth = true;
    // }, 4000)
  }

  onAllume() {
    console.log('click');
  }



}
