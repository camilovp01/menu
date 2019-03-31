import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
import { DataForm } from './data-form.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "http://localhost:8000/my-service/";

  constructor(private clientHttp: HttpClient) { }

  getMenus() {
    return this.clientHttp.get<Menu[]>(this.apiUrl + 'menus/');
  }

  postDataForm(dataForm: DataForm) {
    return this.clientHttp.post(this.apiUrl + 'data_forms/', dataForm);
  }
}
