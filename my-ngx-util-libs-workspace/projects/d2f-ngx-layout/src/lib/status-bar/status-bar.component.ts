import { Component, OnInit } from '@angular/core';
import { UserSession , UserSessionService } from 'd2f-ngx-commons';

@Component({
  selector: 'mylayout-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  constructor(public userSessionService : UserSessionService) { }

  userSession : UserSession = new UserSession();

  ngOnInit(): void {
    this.userSessionService.bsUserSession$.subscribe(
      (userSession)=>{
        this.userSession=userSession;
       // console.log("StatusBarComponent , userSession="+JSON.stringify(this.userSession))
      }
    )
  }

}
