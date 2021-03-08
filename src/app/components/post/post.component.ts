import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
 posts:Post[]=[
   new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
   new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
   new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
   new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
   new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),

 ] 
 
  constructor() { 
  }

  ngOnInit(): void {
  }

}

class Post {
  user:User;
  image:string;
  hashtags:string
  constructor(user:User,img:string,hashtags:string){
    this.image = img;
    this.user = user;
    this.hashtags = hashtags;
  }
}
class User{
first_name:string
last_name:string
constructor(first_name:string,last_name:string){
this.first_name=first_name;
this.last_name=last_name;
}
}