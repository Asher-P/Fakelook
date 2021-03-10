import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as env from '../../environments/authenticationEnv'
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { AuthenticationEnv } from '../../environments/authenticationEnv';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private registerUrl = environment.backendRegisterUrl;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient,private cookieService:CookieService,private userService:UserService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }   
    async isAuthenticated(){
        let params = new HttpParams();
        let facebookData;
     facebookData = await this.http.get(`${AuthenticationEnv.facebookVerifyApi}${this.cookieService.get("accessToken")}`)
     .toPromise()
     .catch(error=>console.warn("error is " + error));
     console.log("facebookData",facebookData);
     if(!this.userService.currentUser)
        this.userService.setUser(facebookData);
        params = params.append('token', this.cookieService.get("token"));
       let localAuth :boolean|Object=false;
       localAuth = await this.http.get("http://localhost:6060/islogin",{params:params})
       .toPromise().catch(err=>localAuth=false);
       //(res=>console.log("res",<boolean>res));
       console.log("localAuth",localAuth);
       if(localAuth || facebookData){
            return true;
        }
       return false;
      }

    login(user:User):Observable<string>{
        console.log(JSON.stringify(user));
       return this.http.post(`${AuthenticationEnv.apiUrl}/login`,JSON.stringify(user),{headers:this.headers})
        .pipe(map((res:any) =>{
          if(res.token){
          return(res.token)}
        }));
      }

      async getToken(){
         let tokenjson:any = await this.http.get(`${env.AuthenticationEnv.apiUrl}/facebook/islogin`).toPromise();
         let userProfile = await this.http.get(`${AuthenticationEnv.facebookVerifyApi}${tokenjson.token}`).toPromise();
         console.log("userProfile",userProfile);
         this.userService.setUser(<User>userProfile);
         return tokenjson;
        }

    register(user:User) {
        return this.http.post<any>(this.registerUrl, user)
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}