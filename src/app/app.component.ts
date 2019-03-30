import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  is_checked = true;

  showHideMenu(){
    this.is_checked = !this.is_checked;
  }
}
