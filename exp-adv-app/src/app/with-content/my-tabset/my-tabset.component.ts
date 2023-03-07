import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, AfterViewInit } from '@angular/core';
import { MyTabComponent } from '../my-tab/my-tab.component';

@Component({
  selector: 'app-my-tabset',
  templateUrl: './my-tabset.component.html',
  styleUrls: ['./my-tabset.component.scss']
})
//export class MyTabsetComponent implements OnInit , AfterContentInit { //V1,V2,V3
export class MyTabsetComponent implements OnInit , AfterViewInit {

  //selectedTabContent : string ="";
  selectedTabTemplateRef : TemplateRef<any> | undefined;

  @ContentChildren(MyTabComponent) 
  tabs!: QueryList<MyTabComponent>

  onSelectionChange(newSelectedTab : MyTabComponent ){
    this.tabs.forEach(tab => { 
                               tab.selected=(tab==newSelectedTab);  
                              if(tab == newSelectedTab )
                                 //this.selectedTabContent = newSelectedTab.tabContentAsString();
                                 this.selectedTabTemplateRef = newSelectedTab.tabContentAsTemplateRef();
                              })
  }
 
 //ngAfterContentInit() { //pour V1,V2,V3
 ngAfterViewInit(){
   let lastTab = this.tabs.last;
   this.tabs.forEach(tab => { console.log(tab.title); 
                              tab.selectionChange.subscribe(
                                  (evt)=>{ this.onSelectionChange(evt.value); }
                              );
                              setTimeout(()=>{
                                //tab.title=tab.title.toUpperCase();
                                tab.selected=(tab==lastTab);
                                //setTimeout to avoid error message "Expression has changed after it was checked"
                              },1)
                            })
    //this.selectedTabContent = lastTab.tabContentAsString();
    this.selectedTabTemplateRef = lastTab.tabContentAsTemplateRef();
 }

  constructor() { }

  ngOnInit(): void {
  }

}
