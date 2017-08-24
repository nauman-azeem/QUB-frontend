import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'qub-bot-chat',
  templateUrl: './bot-chat.component.html',
  styleUrls: ['./bot-chat.component.css']
})
export class BotChatComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
