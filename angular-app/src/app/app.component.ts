import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
average: any;
calculateAverage() {
const numbers = (document.getElementById('numbers') as HTMLInputElement).value;
const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
if (numArray.length > 0) {
this.average = numArray.reduce((a, b) => a + b, 0) / numArray.length;
} else {
this.average = 0;
}
}
  title = 'angular-app';
}
