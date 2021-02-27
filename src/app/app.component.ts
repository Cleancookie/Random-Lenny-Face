import { PARTS } from './mocks/parts.mock';
import { FACES } from './mocks/face.mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  face: any = '';

  constructor() {
    let mouth = this.getRandom(PARTS.mouths);
    let eyes = this.getRandom(PARTS.eyes);
    let ears = this.getRandom(PARTS.ears);

    this.face = `${ears.left}${eyes.left}${mouth}${eyes.right}${ears.right}`;
    this.face = this.getRandom(FACES);
  }

  getRandom(options: Array<any>) {
    return options[Math.floor(Math.random() * options.length)];
  }
}
