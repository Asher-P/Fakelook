import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService,UserService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';
import User from 'src/common/user';

@Component({
  selector: 'app-access-token',
  templateUrl: './access-token.component.html',
  styleUrls: ['./access-token.component.less']
})
export class AccessTokenComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private userService:UserService,
    private cookieService:CookieService,
    private router:Router) { }

   ngOnInit(): void {
     this.saveToken();
  }
  async saveToken(){
    let user:User = await this.userService.createFacebookUser()
    let token:any = user.token
    console.log("user",user);
    this.cookieService.set("accessToken",token.token); 
    this.router.navigate(['home'])

  }

}
