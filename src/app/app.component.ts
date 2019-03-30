import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menu';
  isChecked = true;
  menus: Menu[];
  isHidden = true;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getMenus().subscribe((data) => { this.menus = data });
  }

  showHideMenu() {
    this.isChecked = !this.isChecked;
  }

  public setIsHidden(valuee: boolean) {
    this.isHidden = valuee;
  }
}
