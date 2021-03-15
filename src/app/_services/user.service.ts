import { EventEmitter, Injectable, Output } from '@angular/core';
import * as env from '../../environments/authenticationEnv'
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Subject } from 'rxjs';
import User from 'src/common/user';
import { error } from '@angular/compiler/src/util';
import { AuthenticationEnv } from '@environments/authenticationEnv';

@Injectable({ providedIn: 'root' })
export class UserService {

    userChange:Subject<User> = new Subject();

    currentUser:User;
    Users:User[];
    constructor(private http: HttpClient) { }
    
    addUser(user:User){
        if(user)
        this.Users.push(user);
    }

    getUserById(id:string){
     let foundUser:User =  this.Users.find(user=>user.id === id);
     if(foundUser)
     return foundUser;
     
     throw error("user not Found")
    }

    getUserByEmail(email:string){
     let foundUser:User =  this.Users.find(user=>user.email === email);
     if(foundUser)
     return foundUser;
     
     throw error("user not Found")
    }

    setUser(user:User){
        console.log(user);
        if(user){
            this.currentUser = user
            this.userChange.next(this.currentUser);
        }
    }
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    
    async createFacebookUser(){
        let generateUserName = (user:User)=>{
           return `${user.first_name}${user.last_name}${user.id.slice(length-4)}`;
        }
         let tokenjson:any = await this.http.get(`${env.AuthenticationEnv.apiUrl}/facebook/islogin`).toPromise();
         if(!tokenjson){
             //user not defind, navigate to erorr component
         }
         let userProfile = await this.http.get(`${AuthenticationEnv.facebookVerifyApi}${tokenjson.token}`).toPromise();
         let user:User = <User>userProfile;
         user.token = tokenjson
         user.username = generateUserName(user);
         console.log("userProfile",userProfile);
         //this.addUser(<User>userProfile);
         this.setUser(user);
         return user;
        }

}