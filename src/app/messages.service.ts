import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";

@Injectable()
export class MessagesService {

  messages = [];

  constructor(private http: Http) { }

  getMessages() {
    return this.messages;
  }

  sendMessage(message) {

    this.messages.push([message, '...']);
    setTimeout(() => {
      let objDiv = document.getElementById("Header");
      objDiv.scrollTop = objDiv.scrollHeight;
    },100);
    const reqBody = JSON.stringify({
      query: message
    });
    const reqHeaders = new Headers();
    reqHeaders.append('Content-Type', 'application/JSON');
    this.http.post(`http://localhost:3000/`,reqBody, {headers: reqHeaders}).subscribe(
      (data: Response) => {
        this.messages.pop();
        this.messages.push([message, data.json().ans]);
        setTimeout(() => {
          let objDiv = document.getElementById("Header");
          objDiv.scrollTop = objDiv.scrollHeight;
        },100);
      }
    );
  }

}
