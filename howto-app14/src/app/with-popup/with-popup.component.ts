import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { TestService } from '../common/service/test.service';

@Component({
  selector: 'app-with-popup',
  templateUrl: './with-popup.component.html',
  styleUrls: ['./with-popup.component.scss']
})
export class WithPopupComponent implements OnInit {

  
  
  dataSample = {
    text: "aaa",
    color : "black"
  }

  constructor( private testService : TestService) {}

  public testAttente(){
    /*
    this.testService.multiRequetes$().subscribe(
      (res:any)=>{console.log(JSON.stringify(res));}
    );*/
    this.testService.multiRequetesSeq$().subscribe(
      (res:any)=>{console.log(JSON.stringify(res));}
    );
  }

  
  ngOnInit(): void {
  }

}
