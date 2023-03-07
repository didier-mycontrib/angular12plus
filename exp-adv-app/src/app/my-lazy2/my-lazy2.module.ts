import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './common/store/reducers/counter.reducer';
import { pubReducer } from './common/store/reducers/pub.reducer';
import { MyLazy2RoutingModule } from './my-lazy2-routing.module';
import { MyLazy2Component } from './my-lazy2.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { EffectsModule } from '@ngrx/effects';
import { SessionEffects } from './common/store/effects/session-effects';
import { userSessionReducer } from './common/store/reducers/user-session-reducer';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MyLazy2Component, MyCounterComponent, LoginComponent],
  imports: [
    CommonModule,FormsModule,
    MyLazy2RoutingModule,
    // bind "counterReducer" to "count" (sub-)part  
    // and "pubReducer" to "pub" (sub-)part 
    // of global state in @ngrx/store
    /*StoreModule.forRoot({ count: counterReducer ,
                          pub : pubReducer ,
                          session : userSessionReducer})*/
    StoreModule.forFeature("count",counterReducer), 
    StoreModule.forFeature("pub",pubReducer),
    StoreModule.forFeature("session",userSessionReducer),                 
    /*EffectsModule.forRoot([SessionEffects])*/
    EffectsModule.forFeature([SessionEffects])
  ]
})
export class MyLazy2Module { }
