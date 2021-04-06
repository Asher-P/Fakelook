import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.less']
})
export class TagsFilterComponent implements OnInit {

  tags:string;
  @Output()
  onTagsSelect:EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit(): void {
  }
  focusOut(event){
    this.tags = event.target.value;
    let implementTags:string[] = this.tags.split(',');
    this.onTagsSelect.emit(implementTags); 
  }

}
