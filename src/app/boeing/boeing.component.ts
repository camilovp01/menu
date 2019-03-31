import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-boeign',
  templateUrl: './boeing.component.html',
  styleUrls: ['./boeing.component.css']
})
export class BoeingComponent implements OnInit {

  nameItem = 'Boeing';

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.registerForm.controls.travel_in.setValue(this.nameItem);
    this.appComponent.setIsHidden(false);
  }

}
