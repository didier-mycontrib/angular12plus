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
import { WithDragDropComponent } from './with-drag-drop/with-drag-drop.component';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MyChartComponent,
    WithPopupComponent,
    WithDragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgChartsModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
