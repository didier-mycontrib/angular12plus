import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChartComponent } from './my-chart/my-chart.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithDragDropComponent } from './with-drag-drop/with-drag-drop.component';
import { WithEditorComponent } from './with-editor/with-editor.component';
import { WithPopupComponent } from './with-popup/with-popup.component';

const routes: Routes = [
  { path : "ngr-welcome" , component : WelcomeComponent} ,
  { path : "ngr-mychart" , component : MyChartComponent} ,
  { path : "ngr-withpopup" , component : WithPopupComponent} ,
  { path : "ngr-witheditor" , component : WithEditorComponent} ,
  { path : "ngr-withdragdrop" , component : WithDragDropComponent} ,
  { path : ""  , redirectTo : "/ngr-welcome" , pathMatch : "full"} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
