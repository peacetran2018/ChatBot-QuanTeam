import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  messages: string[] = [];
  translations: string[] = [];
  translation: string = "";
  constructor() { }

  ngOnInit() {
  }

  sendMsg(msg) {
    this.messages.push(msg.value);
    switch (msg.value) {
      case "What is your name?":
      case "what is your name":
        this.translation = "Bạn tên gì?";
        break;
      case "how old are you?":
      case "how old are you":
        this.translation = "Bạn bao nhiêu tuổi rồi?";
        break;
    }
    this.translations.push(this.translation);
    msg.value = "";
  }
}
