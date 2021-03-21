import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  logoutClick(event){
    this.cookieService.delete("accessToken","/","localhost")
    this.cookieService.delete("token","/","localhost")
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
