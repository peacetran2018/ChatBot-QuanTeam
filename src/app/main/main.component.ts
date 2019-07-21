import { Component, OnInit } from '@angular/core';
import { ChatbotService } from './service/chatbot.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  messages: any[] = [];
  translations: string[] = [];
  translation: string = "";
  constructor(private service: ChatbotService) { }

  ngOnInit() {
  }

  sendMsg(msg) {
    this.messages.push({ msg: msg.value, position: 'left' });
    this.messages.push({ msg: "...", position: 'right' });
    this.service.getTranslation(msg.value).subscribe(data => {
      if (data) {
        const index = this.messages.findIndex(element => element.msg === "..."); 
        if (index !== -1) {
          this.messages.splice(index, 1);
        }
        this.messages.push({ msg: data, position: "right" });
      }
    });

    msg.value = "";
  }
}
