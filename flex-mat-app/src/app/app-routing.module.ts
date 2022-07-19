import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminXxComponent } from './admin-xx/admin-xx.component';
import { AdminYyComponent } from './admin-yy/admin-yy.component';
import { BasicComponent } from './basic/basic.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LoginOutComponent } from './login-out/login-out.component';


const routes: Routes = [
  { path: 'ngr-home', component: HomeComponent },
  { path: 'ngr-login-out', component: LoginOutComponent },
  { path: 'ngr-admin-xx', component: AdminXxComponent },
  { path: 'ngr-basic', component: BasicComponent },
  { path: 'ngr-demo', component: DemoComponent },
  { path: 'ngr-admin-yy', component: AdminYyComponent },
  { path: '', redirectTo: '/ngr-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
