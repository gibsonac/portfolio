import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  theMessage: any;
  constructor(private _httpService: HttpService){}
ngOnInit() {
    this.theMessage = {
    name: "",
    _replyto: "",
    message: "",
  }
    }
    email(){
      console.log(this.theMessage);
      let observable = this._httpService.email(this.theMessage);
      observable.subscribe((data: any) => {
        console.log("the response", data)
        this.theMessage = {
          name: "",
          _replyto: "",
          message: "",
        }
      })
    }
}
