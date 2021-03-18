import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  distance:number;
  publisher:string;
  dataDateFilter={
  fromDate:Date,
  toDate:Date}
  tags:string[];
  hashtags:string[];
  constructor() { }

  submitPost(event){
    event.preventDefault();
    
  }
  ClearFilters(){
    this.distance=null;
    this.publisher=null;
    this.dataDateFilter.fromDate=null;
    this.dataDateFilter.toDate=null;
    this.tags=null;
    this.hashtags=null;
  }
  DateSelected(event){
    this.dataDateFilter = event;
  }
  onDistanceSelected(event){
    this.distance = event;
  }
  onHashtagsSelected(event){
    this.hashtags=event;
    console.log(this.hashtags)
  }
  onPublisherSelected(event){
    this.publisher = event;
  }
  onTagsSelected(event){
    this.tags = event;
  }
  ngOnInit(): void {
  }

}
