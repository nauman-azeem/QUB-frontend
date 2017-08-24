import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qub-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
