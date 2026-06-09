import { Component } from '@angular/core';
import { Carousel } from "../carousel/carousel";
import { Accordian } from "../accordian/accordian";

@Component({
  selector: 'app-home',
  imports: [Carousel, Accordian],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
