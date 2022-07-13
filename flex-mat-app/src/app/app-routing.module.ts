import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';


const routes: Routes = [
  { path: 'ngr-home', component: HomeComponent },
  { path: 'ngr-loginLogout', component: LoginLogoutComponent },
  { path: '', redirectTo: '/ngr-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
