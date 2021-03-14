import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import Post from 'src/common/post';
import User from 'src/common/user';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
   
    showMap = false;
    showFeed = true;
    showFriends = false;
    user: User;
    posts:Post[];
    constructor(private userService: UserService,
        private cookieService:CookieService,
        private router:ActivatedRoute,
        private  route:Router) {
            this.posts = [
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",31.801462599999997,34.6524561,"kfso,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",34.801462599999997,33.6524561,"somting,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",32.801462599999997,32.6524561,"somting,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",30.801462599999997,31.6524561,"somting,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",29.801462599999997,30.6524561,"somting,bbb"),
             
              ] 
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