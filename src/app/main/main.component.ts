import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  messages: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  sendMsg(msg) {
    this.messages.push(msg.value);
    msg.value = "";
  }
}
