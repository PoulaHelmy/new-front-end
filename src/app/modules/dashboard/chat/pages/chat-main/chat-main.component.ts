import { Component, OnInit } from '@angular/core';
import { ChatService } from '@@core/services/chat.service';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss'],
})
export class ChatMainComponent implements OnInit {
  messagesList;
  usersList;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessagesList().subscribe((messagesList) => {
      this.messagesList = messagesList;
      this.usersList = Object.keys(this.messagesList).map((val) => {
        return val;
      });
    });
  }
  // postMessage() {
  //   const user = {
  //     id: this.agent._id,
  //     name: this.agent.name,
  //   };
  //   this.chatService.sendMessage(user, this.chatMessage, this.selectedUser);
  // }
  // endConversation() {
  //   this.chatService.endConversation(this.selectedUser);
  // }
}
