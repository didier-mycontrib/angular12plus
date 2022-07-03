import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChartComponent } from './my-chart/my-chart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithDynBs5Component } from './with-dyn-bs5/with-dyn-bs5.component';
import { WithLeafletComponent } from './with-leaflet/with-leaflet.component';
import { WithPopupComponent } from './with-popup/with-popup.component';

const routes: Routes = [
  { path : "ngr-welcome" , component : WelcomeComponent} ,
  { path : "ngr-mychart" , component : MyChartComponent} ,
  { path : "ngr-withleaflet" , component : WithLeafletComponent} ,
  { path : "ngr-withpopup" , component : WithPopupComponent} ,
  { path : "ngr-withdynbs5" , component : WithDynBs5Component} ,
  { path : ""  , redirectTo : "/ngr-welcome" , pathMatch : "full"} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
