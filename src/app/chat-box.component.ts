import { Component, OnInit } from '@angular/core';
import {MessagesService} from "./messages.service";

@Component({
  selector: 'qub-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
})
export class ChatBoxComponent implements OnInit {

  messageBoxValue: string;

  constructor(private messageService: MessagesService) { }

  ngOnInit() {

  }

  enterChecker(event) {
    if(event.keyCode == 13){
      this.sendButtonClicked();
    }
  }

  sendButtonClicked() {
    this.messageService.sendMessage(this.messageBoxValue.toLowerCase());
    this.messageBoxValue = '';
  }

}
