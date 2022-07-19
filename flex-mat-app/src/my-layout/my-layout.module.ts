import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MlImportMaterialModule } from './common/imports/ml-import-material.module';
import { LegalFooterComponent } from './legal-footer/legal-footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainSideNavComponent } from './main-side-nav/main-side-nav.component';
import { LayoutComponent } from './my-layout.component';
import { QuickMenuComponent } from './quick-menu/quick-menu.component';
import { QuickToolbarComponent } from './quick-toolbar/quick-toolbar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    LayoutModule,
    MlImportMaterialModule 
  ],
  exports: [
    LayoutComponent 
  ],
  declarations: [ 
    StickyHeaderComponent,
    StickyFooterComponent,
    LegalFooterComponent,
    MainSideNavComponent,
    MainContentComponent,
    QuickMenuComponent,
    QuickToolbarComponent,
    LayoutComponent,
    StatusBarComponent 
  ]
})
export class MyLayoutModule { }
