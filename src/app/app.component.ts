import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-menu></app-menu>',
  styleUrls: ['./app.component.css'] // sử dụng styleUrls thay vì styleUrl
})
export class AppComponent {
  title = 'angular';
}
