import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { HomeComponent } from './modules/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailComponent } from './components/detail/detail.component';
import { DefaultComponent } from './layouts/default/default.component';

// const routes: Routes = [
//   {path: '', component: DefaultComponent},
//   {path: '', redirectTo:'home', pathMatch:'full'},
//   {path: 'home', component: HomeComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'register', component: RegisterComponent},
//   {path: 'profile', component: ProfileComponent},
//   {path: 'detail/:id', component: DetailComponent}

// ];

const routes: Routes = [ {

  path: '', component: DefaultComponent,

  children: [

  //{path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'detail/:id', component: DetailComponent}
 ]

}];

// const routes: Routes = [{
//   path: '',
//   component: DefaultComponent,
//   children: [
//       { path:'', component: HomeComponent }, 
//       { path: 'login', component: LoginComponent }
//      ]
// }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
