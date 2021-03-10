import Post from '../../../../src/common/post';
import User from '../../../../src/common/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
 
 @Input()
 post;

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.post);
  }

}

