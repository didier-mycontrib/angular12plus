import { Component } from '@angular/core';

@Component({
  selector: 'app-with-ng-template',
  templateUrl: './with-ng-template.component.html',
  styleUrls: ['./with-ng-template.component.scss']
})
export class WithNgTemplateComponent {

  ready=false;

  ctxSemaine = {code: 1 , label : "semaine"};
  ctxWeekEnd = {code: 2 , label : "weekend"};

}
