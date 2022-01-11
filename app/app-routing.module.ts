import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { HomeComponent } from './components/home/home.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';

const routes: Routes = [
  {path:'adminsignin',component: AdminSigninComponent},
  {path:'adminsignup',component: AdminSignupComponent},
  {path:'usersignup',component: UserSignupComponent},
  {path:'usersignin',component: UserSigninComponent},
  {path:'home',component: HomeComponent},

  {path:'',redirectTo:'/home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
