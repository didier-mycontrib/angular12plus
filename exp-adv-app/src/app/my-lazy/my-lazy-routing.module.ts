import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { XxComponent} from './xx/xx.component';
import { YyComponent} from './yy/yy.component';

const myLazyRoutes: Routes = [
  { path: 'xx', component: XxComponent } ,
  { path: 'yy', component: YyComponent } ,
  { path: 'simpleCounter', component: SimpleCounterComponent } ,
  { path: 'simpleLogin', component: SimpleLoginComponent } ,
  { path: '', redirectTo: 'xx', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(myLazyRoutes)],
  exports: [RouterModule]
})
export class MyLazyRoutingModule { }
