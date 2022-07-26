import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LoginOutComponent } from './login-out/login-out.component';

const routes: Routes = [
  { path: 'ngr-home', component: HomeComponent },
  { path: 'ngr-demo', component: DemoComponent },
  { path: 'ngr-login-out', component: LoginOutComponent },
  { path: '', redirectTo: '/ngr-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
