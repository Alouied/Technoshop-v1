import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmedPasswordComponent } from './confirmed-password/confirmed-password.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 // {path:'',component:AppComponent},
  {path:'ConnexionUser',component:ConnexionUserComponent},
  {path:'RegistrationUser',component:RegistrationUserComponent},
  {path:'ConnexionAdmin',component:ConnexionAdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'reset',component:ConfirmedPasswordComponent},
  {path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
