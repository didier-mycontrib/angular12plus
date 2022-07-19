import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ImportMaterialModule } from './common/imports/import-material.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { LoginOutComponent } from './login-out/login-out.component';
import { MyLayoutModule } from 'src/my-layout/my-layout.module';
import { BasicComponent } from './basic/basic.component';
import { DemoComponent } from './demo/demo.component';
import { AdminXxComponent } from './admin-xx/admin-xx.component';
import { AdminYyComponent } from './admin-yy/admin-yy.component';
import { MyComponentsModule } from 'src/my-components/my-components-module';
import { DeviseComponent } from './devise/devise.component';
import { MyCrudModule } from 'src/my-crud/my-crud-module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginOutComponent,
    BasicComponent,
    DeviseComponent,
    DemoComponent,
    AdminXxComponent,
    AdminYyComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ImportMaterialModule,
    MyLayoutModule,
    MyComponentsModule,
    MyCrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
