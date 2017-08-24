import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box.component';
import { ChatAreaComponent } from './chat-area.component';
import { DropdownDirective } from './dropdown.directive';
import { BotChatComponent } from './bot-chat.component';
import { UserChatComponent } from './user-chat.component';
import { MessagesService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatAreaComponent,
    DropdownDirective,
    BotChatComponent,
    UserChatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DropdownDirective, MessagesService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
