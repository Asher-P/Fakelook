import { Component, OnInit } from '@angular/core';
import Post from '../../../../src/common/post';
import User from '../../../../src/common/user';
@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.less']
})
export class PostsContainerComponent implements OnInit {

  constructor() { }
  posts:Post[]=[
    new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
    new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
    new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
    new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
    new Post(new User("Asher","Peretz"),"https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg","somting,bbb"),
 
  ] 
  ngOnInit(): void {
  }

}
