import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { D2fNgxLayoutModule } from 'projects/d2f-ngx-layout/src/lib/d2f-ngx-layout.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportMaterialModule } from './common/imports/import-material.module';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { LoginOutComponent } from './login-out/login-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    LoginOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImportMaterialModule,
    D2fNgxLayoutModule
   // D2fNgxComponentsModule,
   // D2fNgxCrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
