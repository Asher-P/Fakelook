import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/common/post';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  posts: Post[];
  heigthIcon=70;
  widthIcon = 70; 
  imageUrl="https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg";
 
  position;
  zoom: number = 15;
  currentLocationTitle: string = "you are here";


  constructor() {
    
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude)
      console.log("long", position.coords.longitude);
      this.position = position
    },
      err => alert("you must to access the location setting"));
  }
  ngOnInit() {
    
   }

  // createIcon(url:string){
  //   return {
  //     url: url,
  //     origin:{
  //       x:0,
  //       y:0
  //     },
  //     scaledSize: {
  //       width: 70,
  //       height: 70
  //     }
  //   } 
  // }
  
  zoomChange($event){
    console.log($event);
    let marklist= document.getElementsByName("imageMark");
    
  }
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}