import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Post from 'src/common/post';
import SendPost from 'src/common/sendPost';
import { PostApiEnv } from '../../environments/postApiEnv'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http:HttpClient
  ) { }

  getPosts(){

  }
  uploadPost(post:SendPost){
    console.log("Upload",post);
    this.http.post(PostApiEnv.uploadPostUrl,post,{headers:this.headers});

  }
}
