import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private db: AngularFireDatabase) {}
  getMessagesList() {
    return this.db.object('Chat').valueChanges();
  }
  getMessages(user) {
    return this.db
      .list('Chat/' + user + '/messages', (ref) => {
        return ref.orderByChild('timeStamp');
      })
      .valueChanges();
  }
  sendMessage(user, message, chatID) {
    const messageData = {
      senderID: user.id,
      messageBody: message,
      senderName: user.name,
      timeStamp: new Date().getTime(),
    };
    const agentMeta = {
      name: user.name,
      new: true,
    };
    const userMeta = {
      new: false,
    };
    this.db.list(`Chat/${chatID}/messages`).push(messageData);
    this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
    this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
  }
  endConversation(chatID) {
    const agentMeta = {
      name: '',
      new: false,
    };
    const userMeta = {
      new: false,
    };
    this.db.database.ref(`Chat/${chatID}/meta-data/agent`).update(agentMeta);
    this.db.database.ref(`Chat/${chatID}/meta-data/user`).update(userMeta);
  }
} //end of Class
