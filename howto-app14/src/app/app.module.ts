import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyChartComponent } from './my-chart/my-chart.component';

import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { WithPopupComponent } from './with-popup/with-popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WithLeafletComponent } from './with-leaflet/with-leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { WithDynBs5Component } from './with-dyn-bs5/with-dyn-bs5.component'; 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MyChartComponent,
    WithPopupComponent,
    WithLeafletComponent,
    WithDynBs5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgChartsModule,
    LeafletModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
