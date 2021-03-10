import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-access-token',
  templateUrl: './access-token.component.html',
  styleUrls: ['./access-token.component.less']
})
export class AccessTokenComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private cookieService:CookieService,
    private router:Router) { }

   ngOnInit(): void {
     this.saveToken();
  }
  async saveToken(){
    let token:any = await this.authService.getToken()
    this.cookieService.set("accessToken",token.token);
    this.router.navigate(['home'])

  }

}
