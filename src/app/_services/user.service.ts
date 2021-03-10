import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    userChange:Subject<User> = new Subject();

    currentUser:User;
    constructor(private http: HttpClient) { }


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