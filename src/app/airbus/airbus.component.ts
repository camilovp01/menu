import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-airbus',
  templateUrl: './airbus.component.html',
  styleUrls: ['./airbus.component.css']
})
export class AirbusComponent implements OnInit {

  public nameItem = 'Airbus';

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.appComponent.registerForm.controls.travel_in.setValue(this.nameItem);
    this.appComponent.setIsHidden(false);
  }

}
