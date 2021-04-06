import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-publisher-filter',
  templateUrl: './publisher-filter.component.html',
  styleUrls: ['./publisher-filter.component.less']
})
export class PublisherFilterComponent implements OnInit {

  publisher:string;
  @Output()
  onPublisherSelect:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  focusOut(event){
    this.publisher = event.target.value;
    this.onPublisherSelect.emit(this.publisher);
  }

}
