import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
   
    showMap = false;
    showFeed = true;
    showFriends = false;
    user: User;

    constructor(private userService: UserService,
        private cookieService:CookieService,
        private router:ActivatedRoute,
        private  route:Router) {
         }

    MapClicked = ()=>{
        console.log("map clicked")
         this.showFeed=false;
         this.showMap = true;
         this.showFriends = false;
        this.route.navigate["map"]
    }
    FeedClicked = ()=>{
        console.log("feed clicked")
         this.showMap = false;
         this.showFeed=true;
         this.showFriends = false;


    }
    FriendsClicked = ()=>{
        this.showMap = false;
        this.showFeed=false;
        this.showFriends = true;
    }
    ngOnInit() {
        if(this.userService.currentUser){
            console.log("currentUser",this.userService.currentUser);
            this.user= this.userService.currentUser
        }
        else{
        this.userService.userChange.subscribe((res)=>{
            this.user=res;
            console.log("user",this.user);
        });
    }

    }
}