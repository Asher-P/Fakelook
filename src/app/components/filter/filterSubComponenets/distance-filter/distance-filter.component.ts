import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-distance-filter',
  templateUrl: './distance-filter.component.html',
  styleUrls: ['./distance-filter.component.less']
})
export class DistanceFilterComponent implements OnInit {

  distance:number;
  @Output()
  onDistanceSelect:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  focusOut(event){
    this.distance = event.target.value;
    this.onDistanceSelect.emit(this.distance);
  }
}
