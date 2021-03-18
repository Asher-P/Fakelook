import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hashtags-filter',
  templateUrl: './hashtags-filter.component.html',
  styleUrls: ['./hashtags-filter.component.less']
})
export class HashtagsFilterComponent implements OnInit {

  hashtags:string;
  @Output()
  onSelectHashtags:EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit(): void {
  }
  focusOut(event){
    this.hashtags= event.target.value;
    let implementHashtags:string[] = this.hashtags.split(',');
    this.onSelectHashtags.emit(implementHashtags); 
  }

}
