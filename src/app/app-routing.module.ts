import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';
import{LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path: '', redirectTo: 'welcom',pathMatch: 'full'},
  {path: 'welcom', component: WelcomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [WelcomComponent,LoginComponent,RegisterComponent ]