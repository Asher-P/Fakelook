import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { AuthenticationEnv } from '../../environments/authenticationEnv';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private registerUrl = environment.backendRegisterUrl;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }   
    async isAuthenticated(){
        let params = new HttpParams();
        params = params.append('token', localStorage.token||"xxx");
       let flag :boolean|Object=false;
       flag = await this.http.get("http://localhost:6060/islogin",{params:params})
       .toPromise().catch(err=>flag=false);
       //(res=>console.log("res",<boolean>res));
       console.log("flag",flag);
       if(flag === true)
       return true;
       else
       return false;
      }

    login(user:User):Observable<string>{
        console.log(JSON.stringify(user));
       return this.http.post(AuthenticationEnv.loginUrl,JSON.stringify(user),{headers:this.headers})
        .pipe(map((res:any) =>{
          if(res.token){
          return(res.token)}
        }));
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