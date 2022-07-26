import { Component, Input, OnInit } from '@angular/core';
import { MenuDef } from '../common/data/menu-def';


@Component({
  selector: 'mylayout-sticky-footer',
  templateUrl: './sticky-footer.component.html',
  styleUrls: ['./sticky-footer.component.scss']
})
export class StickyFooterComponent implements OnInit {

  @Input()
  quickMenuDefs : MenuDef[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
