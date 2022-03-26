import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PatientsComponent } from './components/patients/patients.component';
import { AuthGuard } from './guards/auth.guard';
import { ShowPatientsComponent } from './components/patients/show-patients/show-patients.component';
import { AddPatientsComponent } from './components/patients/add-patients/add-patients.component';

const routes: Routes = [
  {path: "login", component: LoginComponent}, 
  {path: "signUp", component: SignupComponent},

  {path: "", component: LayoutComponent, canActivateChild: [AuthGuard],  children:[
    {path: "", component: DashboardComponent},
    {path: "patients", component: PatientsComponent},
    {path: "show-patients", component: ShowPatientsComponent},
    {path: "add-patients", component: AddPatientsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
