import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appreils: any[];
  isAuth = false;
  search: string;
  state: string;

  constructor(private appreilService: AppareilService) { }

  ngOnInit() {
    this.appreils = this.appreilService.appareils;
    setTimeout(() => {
      this.isAuth = true;
    }, 3000)
  }

  onAllumer() {
    this.appreilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appreilService.switchOffAll();
    } else {
      return null;
    }
}

}
