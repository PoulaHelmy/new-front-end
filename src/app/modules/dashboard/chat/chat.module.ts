import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatMainComponent } from './pages/chat-main/chat-main.component';


@NgModule({
  declarations: [ChatMainComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
