import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.less']
})
export class DateFilterComponent implements OnInit {

  dateFilterData={
  fromDate:Date,
  toDate:Date
  }

  @Output()
  onDateSelect:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  
  focusOut(event){
    if(event.target.name === "formDate")
      this.dateFilterData.fromDate = event.target.value;
    else
      this.dateFilterData.toDate = event.target.value;

      this.onDateSelect.emit(this.dateFilterData);

  }
  ngOnInit(): void {
  }

}
