import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-toggle-panel',
  templateUrl: './my-toggle-panel.component.html',
  styleUrls: ['./my-toggle-panel.component.scss']
})
export class MyTogglePanelComponent implements OnInit {

  @Input()
  title = "my-toogle-panel";

  panelOpenState=false;

  constructor() { }

  ngOnInit(): void {
  }

}
