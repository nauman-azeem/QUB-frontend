import {Component, OnInit, OnChanges, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {MessagesService} from "./messages.service";

@Component({
  selector: 'qub-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit, OnChanges, AfterViewInit {

  messages = [];

  constructor(private messagesService: MessagesService, ) { }

  ngOnInit() {
    document.getElementById('Header').style.height = (window.innerHeight - 100) + 'px';
    this.messages = this.messagesService.getMessages();
  }

  ngOnChanges() {

  }

  ngAfterViewInit() {
    // document.getElementById('Header').style.height = (window.innerHeight - 100) + 'px';
    // this.messages = this.messagesService.getMessages();
  }
}
