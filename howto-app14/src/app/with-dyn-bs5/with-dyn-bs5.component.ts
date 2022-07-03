import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-dyn-bs5',
  templateUrl: './with-dyn-bs5.component.html',
  styleUrls: ['./with-dyn-bs5.component.scss']
})
export class WithDynBs5Component implements OnInit {

  a :number=0;
  b :number=0;
  resAdd :number =0;
  ht :number=0;
  tauxTvaPct :number=20;
  tva :number =0;
  ttc :number =0;

  constructor() { }

  ngOnInit(): void {
  }

  onCalculAdd(){
    this.resAdd = Number(this.a) + Number(this.b);
  }

  onCalculTvaEtTtc(){
    this.tva= Number(this.ht) * Number(this.tauxTvaPct)/100;
    this.ttc= Number(this.ht) + this.tva;
  }

}
