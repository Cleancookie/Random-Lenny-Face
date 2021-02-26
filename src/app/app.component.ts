import { faces } from './mocks/lenny.mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'random-lenny-face';

  face: any = '';

  constructor() {
    this.face = faces[Math.floor(Math.random() * faces.length)];
  }
}
