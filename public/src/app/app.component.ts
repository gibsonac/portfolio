import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theMessage: any;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
  }
}
