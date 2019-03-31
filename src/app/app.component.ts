import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.model';
import { DataService } from './data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataForm } from './data-form.model';
import { timer } from 'rxjs';

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
  hiddenLigthBox = true;

  registerForm: FormGroup;
  submitted = false;
  message = "";

  constructor(private service: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celphone: ['', Validators.required],
      travel_in: ['', Validators.required],
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
    this.service.postDataForm(dataForm).subscribe((res) => {
      console.log(res);
      this.hiddenLigthBox = false;
      this.message = "Tu informaci&oacute;n fue enviada con &eacute;xito, estaremos en contacto contigo.";
      this.resetForm();
    },
      (error) => {
        this.hiddenLigthBox = false;
        this.message = "Ocurrió un error en el envío de la información. Contacta a tu administrador"
        console.log("Error", error);

      });
    let source = timer(5000);
    source.subscribe(val => this.hiddenLigthBox = true);
  }

  resetForm() {
    this.registerForm.controls.full_name.reset();
    this.registerForm.controls.age.reset();
    this.registerForm.controls.email.reset();
    this.registerForm.controls.celphone.reset();
  }

}
