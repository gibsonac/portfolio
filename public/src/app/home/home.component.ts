import { Component, OnInit, ElementRef, DoCheck, AfterViewChecked, Sanitizer, SecurityContext } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  $: any;
  youtubeLink = "";
  videoLink = "https://www.youtube.com/embed/";
  videoLinkId = "64a_o_yyQhw?rel=0";
  videoLinkId2 = "f95g94SInDI?rel=0";
  clicked = true;

  constructor() { }

  ngOnInit() {
  }
  project1ClickOn() {
    this.videoLink += this.videoLinkId;
    this.youtubeLink = this.videoLink;
  }
  project1ClickOff() {
    console.log("it was clicked off!")
    this.youtubeLink = "";
  }
  project2ClickOn() {
    this.videoLink += this.videoLinkId2;
    this.youtubeLink = this.videoLink;
  }
  project2ClickOff() {
    console.log("it was clicked off!")
    this.youtubeLink = "";
  }
  
}
