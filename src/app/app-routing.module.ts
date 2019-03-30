import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirbusComponent } from './airbus/airbus.component';
import { BoeingComponent } from './boeing/boeing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'Airbus', component: AirbusComponent },
  { path: 'Boeing', component: BoeingComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
