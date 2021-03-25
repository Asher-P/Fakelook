import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import SendPost from 'src/common/sendPost';
import User from 'src/common/user';
import { PostsService } from '../../_services/posts.service' 

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.less']
})
export class UploadPostComponent implements OnInit {

  @Input()
  currentUser:User

  location;
  selectedFile:File = null;
  hashtags:"";
  constructor(
    private formBuilder: FormBuilder,
    private postsService:PostsService,
  ) {

   }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.location = position
    },
      err => alert("you must to access the location setting"));

  }
  onFileChange(event){
    this.selectedFile = event.target.files[0];
  }

   submitPost($event){
     $event.preventDefault();
     console.log("in submit");
      let post:SendPost = new SendPost(this.currentUser,this.selectedFile,
      this.location.coords.latitude,
      this.location.coords.longitude,
      this.hashtags);
      console.log("post",post);
      this.postsService.uploadPost(post);
    }
  
 

}

