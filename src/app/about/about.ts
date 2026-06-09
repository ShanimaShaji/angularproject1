import { Component } from '@angular/core';
import { Cards } from "../cards/cards";
@Component({
  selector: 'app-about',
  imports: [Cards],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
cardData: any[]=[
  {
    id:1,
    title:"Card 1",
    description:"This is the description for card 1.",
    image:"image.jpg"
  },
  {
    id:2,
    title:"Card 2",
    description:"This is the description for card 2.",
    image:"image2.jpg"
  }
  
];
}