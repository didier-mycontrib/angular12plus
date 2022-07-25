import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mylayout-legal-footer',
  templateUrl: './legal-footer.component.html',
  styleUrls: ['./legal-footer.component.scss']
})
export class LegalFooterComponent implements OnInit {

  @Input()
  legalFooterInnerHtml = "legal footer"

  constructor() { }

  ngOnInit(): void {
  }

}
