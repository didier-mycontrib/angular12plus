import { Component, OnInit, Input, AfterContentInit, ContentChild, ElementRef, EventEmitter, Output, TemplateRef, ContentChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.scss']
})
export class MyTabComponent implements OnInit, AfterContentInit {

  @Input() title:string="defaultTabTitle";

  @Input() selected:boolean=false;

  @Output()
  public selectionChange : EventEmitter<{value:MyTabComponent}> = new EventEmitter<{value:MyTabComponent}>();

  //@ContentChild("tabContent") 
  //contentElementRef!: ElementRef ; // refer to elt with #tab_content (V1)

  //@Input()
  //tabTemplate: TemplateRef<any> | undefined ; // V2 

  //@ContentChild(TemplateRef)
  //tabTemplate: TemplateRef<any> | undefined ; // V3

  @ViewChild(TemplateRef)
  tabTemplate: TemplateRef<any> | undefined ; // V4

  onClick(){
      this.selected=!this.selected;
      if(this.selected)
          this.selectionChange.emit({value:this});
  }

  constructor() { }
  ngAfterContentInit(): void {
     //console.log(this.contentElementRef.nativeElement.innerText) // V1
  }

  /* V1
  public tabContentAsString(){
    if(this.contentElementRef==undefined) 
       return "";
    else 
      return this.contentElementRef.nativeElement.innerText
      //return this.contentElementRef.nativeElement.innerHTML : avec trop de choses encombrantes
  }
  */

  public tabContentAsTemplateRef() : TemplateRef<any> | undefined{
      return  this.tabTemplate;
  }

  ngOnInit(): void {
  }

}
