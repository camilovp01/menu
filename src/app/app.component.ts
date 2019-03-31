import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { DataService } from './data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataForm } from './data-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'menu';
  isChecked = false;
  menus: Menu[];
  isHidden = true;
  travelIn = '';

  registerForm: FormGroup;
  submitted = false;

  constructor(private service: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celPhone: ['', Validators.required],
      travelIn: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]]
    });
    this.service.getMenus().subscribe((data) => { this.menus = data });
  }

  showHideMenu() {
    this.isChecked = !this.isChecked;
  }

  public setIsHidden(valuee: boolean) {
    this.isHidden = valuee;
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let dataForm: DataForm;
    dataForm = this.registerForm.value;
    alert('SUCCESS!! :-)' + JSON.stringify(dataForm));
  }

}
