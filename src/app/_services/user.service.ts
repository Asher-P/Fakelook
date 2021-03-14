import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Subject } from 'rxjs';
import User from 'src/common/user';
import { error } from '@angular/compiler/src/util';

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
}