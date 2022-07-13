import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StickyHeaderComponent } from './layout/sticky-header/sticky-header.component';
import { StickyFooterComponent } from './layout/sticky-footer/sticky-footer.component';
import { LegalFooterComponent } from './layout/legal-footer/legal-footer.component';
import { MainSideNavComponent } from './layout/main-side-nav/main-side-nav.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { QuickMenuComponent } from './layout/quick-menu/quick-menu.component';
import { QuickToolbarComponent } from './layout/quick-toolbar/quick-toolbar.component';
import { FormsModule } from '@angular/forms';
import { ImportMaterialModule } from './common/imports/import-material.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { StatusBarComponent } from './layout/status-bar/status-bar.component';
import { MenuItemComponent } from './layout/main-side-nav/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    StickyFooterComponent,
    LegalFooterComponent,
    MainSideNavComponent,
    MainContentComponent,
    QuickMenuComponent,
    QuickToolbarComponent,
    LayoutComponent,
    HomeComponent,
    LoginLogoutComponent,
    StatusBarComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    ImportMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
