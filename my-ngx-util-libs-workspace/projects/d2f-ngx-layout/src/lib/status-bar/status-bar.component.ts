import { Component, OnInit } from '@angular/core';
import { UserSession , UserSessionEx , UserSessionService } from 'd2f-ngx-commons';

@Component({
  selector: 'mylayout-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  constructor(public userSessionService : UserSessionService) { }

  userSessionEx : UserSessionEx = new UserSessionEx(undefined);

  ngOnInit(): void {
    this.userSessionService.bsUserSession$.subscribe(
      (userSession)=>{
        this.userSessionEx=new UserSessionEx(userSession);
       // console.log("StatusBarComponent , userSessionEx="+JSON.stringify(this.userSessionEx))
      }
    )
  }

}
