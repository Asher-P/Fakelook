import { Component, Input, OnInit } from '@angular/core';
import Post from '../../../../src/common/post';
import User from '../../../../src/common/user';
@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.less']
})
export class PostsContainerComponent implements OnInit {

  @Input()
  posts:Post[];

  constructor() { }
  
  ngOnInit(): void {
  }

}
