import { Component, OnInit } from '@angular/core';

import Icons from '../../../environments/iconsUrls';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import Post from 'src/common/post';
import User from 'src/common/user';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit{
   
    icons = Icons
    showMap = false;
    showFeed = true;
    showFriends = false;
    showFilter = false;
    showUpload = false;
    user: User;
    posts:Post[];
    constructor(private userService: UserService,
        private  route:Router) {
            this.posts = [
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",31.801462599999997,34.6524561,"kfso,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",34.801462599999997,33.6524561,"somting,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",32.801462599999997,32.6524561,"somting,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",30.801462599999997,31.6524561,"somting,bbb"),
                new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",29.801462599999997,30.6524561,"somting,bbb"),
             
              ] 

        }
    
    UploadClicked(){
        this.showFilter = false;
        this.showUpload = true;
    }
    FilterClicked(){
        this.showUpload = false;
        this.showFilter = true;
    }
        
    MapClicked = ()=>{
       this.setFilter(true,false,false);
    }
    FeedClicked = ()=>{
        this.setFilter(false,true,false);
    }
    FriendsClicked = ()=>{
        this.setFilter(false,false,true);
    }


    setFilter = (map:boolean,feed:boolean,friends:boolean)=>{
        this.showMap = map;
        this.showFeed=feed;
        this.showFriends = friends;
    }
    ngOnInit() {
        const user = this.userService.currentUser;
        if(user){
            console.log("currentUser",user);
            this.user= user;
        }
 

    }
}