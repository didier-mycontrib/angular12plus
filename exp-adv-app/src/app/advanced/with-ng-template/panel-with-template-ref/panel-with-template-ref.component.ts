import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-panel-with-template-ref',
  templateUrl: './panel-with-template-ref.component.html',
  styleUrls: ['./panel-with-template-ref.component.scss']
})
export class PanelWithTemplateRefComponent {
  @Input()
  headerTemplate: TemplateRef<any> | undefined;

  @Input()
  footerTemplate: TemplateRef<any> | undefined;
}
