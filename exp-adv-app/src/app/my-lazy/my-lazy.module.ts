import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XxComponent } from './xx/xx.component';
import { YyComponent } from './yy/yy.component';
import { MyLazyRoutingModule } from './my-lazy-routing.module';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { CounterState } from './common/store/states/counter.state';
import { NgxsModule } from '@ngxs/store';
import { SessionState } from './common/store/states/session.state';
import { FormsModule } from '@angular/forms';
import { SimpleLoginComponent } from './simple-login/simple-login.component';



@NgModule({
  declarations: [XxComponent, YyComponent, SimpleCounterComponent , SimpleLoginComponent],
  imports: [
    CommonModule , FormsModule, MyLazyRoutingModule,
    //NgxsModule.forRoot([CounterState]) if in main/bootstrap module
     NgxsModule.forFeature([CounterState, SessionState]) //if in a lazy module
  ]
})
export class MyLazyModule { }
