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
    this.messages.push({msg: msg.value, position: 'left'});
    switch (msg.value) {
      case "What is your name?":
      case "what is your name":
        this.translation = "Bạn tên gì?";
        break;
      case "how old are you?":
      case "how old are you":
        this.translation = "Bạn bao nhiêu tuổi rồi?";
        break;
      default:
        this.translation = "Tôi không hiểu";
        break;
    }
    this.messages.push({msg: this.translation, position:"right"});

    this.service.getTranslation(msg.value).subscribe(data =>{
      console.log(data.message);
    });

    msg.value = "";
  }
}
