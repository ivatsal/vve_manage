import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { ProjectOnbordComponent } from './project-onbord/project-onbord.component';
import { UserDataComponent } from './user-data/user-data.component';
import { authGuard, canActivateAdmin } from './auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'dashbord', component: DashbordComponent },
  { path: 'project-on-board', component: ProjectOnbordComponent, canActivate: [authGuard] },
  { path: 'create-user', component: LoginComponent, canActivate: [authGuard] },
  { path: 'user', component: UserDataComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
