import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { MenuDef } from './common/data/menu-def';

@Component({
  selector: 'mylayout-layout',
  templateUrl: './my-layout.component.html',
  styleUrls: ['./my-layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mySmallBreakPoint="600px";
  isSmall=true;//or not

  @Input()
  title ="my-angular-app";

  @Input()
  mainMenuDefs : MenuDef[] = [
    new MenuDef("home","/ngr-home"),
    new MenuDef("login-out","/ngr-login-out")
  ];

  @ViewChild('matSideNav', { static: true })
  matSideNav : MatSidenav | undefined;

  constructor(private _breakpointObserver: BreakpointObserver) { }

  //public innerWidth: any; //v1 (without BreakpointObserver)
  openedSideNav : boolean = false;
  sideNavMode : MatDrawerMode = "side";  /* mode = side , push (auto-close when click on main content) or
  over (idem as push but over / no slide )*/

  ngOnInit() {
    /*
    //V1:
    this.innerWidth = window.innerWidth;
    this.displaySideMenuIfLargeWidth();
    */
    this._breakpointObserver
    .observe([`(min-width: ${this.mySmallBreakPoint})`])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        //console.log('Viewport is 600px or over!');
        this.isSmall=false;
        this.displaySideMenuIfLargeWidth();
      } else {
        //console.log('Viewport is smaller than 600px!');
        this.isSmall=true;
        this.displaySideMenuIfLargeWidth();
      }
    });
  }

  displaySideMenuIfLargeWidth(){
    this.sideNavMode="side";
    if (this.isSmall==true ) {
      this.openedSideNav = false;
    } else {
      this.openedSideNav = true;
    } 
  }

  onMenuMouseEnterInMainSideNav(){
    //console.log("onMenuMouseEnterInMainSideNav");
    //scroll to top of menu to insure menu is visible
    document.getElementById("main-side-nav")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }

  onAfterNav(evt : any){
    if (this.isSmall==true && this.matSideNav ) {
      this.matSideNav.close();
      this.openedSideNav=false;
    }
  }

  onTogglerMenu(){
    //need to display menu if necessary (small width)
    //console.log("onTogglerMenu()")
    this.openedSideNav=!this.openedSideNav;
  }

  /*
  //V1:
  @HostListener('window:resize', ['$event'])
  onResize(event :any) {
    this.innerWidth = window.innerWidth;
    this.displaySideMenuIfLargeWidth();
  }

  displaySideMenuIfLargeWidth(){
    if (this.innerWidth < 600 ) {
      this.openedSideNav = false;
    } else {
      this.openedSideNav = true;
    } 
  }
  */
}
