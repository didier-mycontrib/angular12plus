import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-editor',
  templateUrl: './with-editor.component.html',
  styleUrls: ['./with-editor.component.scss']
})
export class WithEditorComponent implements OnInit {

  htmlText:string="ok";

  constructor() { }

  ngOnInit(): void {
  }

  onGetText(){
    console.log("html text=" + this.htmlText);
  }

}
