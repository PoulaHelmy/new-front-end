import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js/with-encryption';
@Injectable({
  providedIn: 'root',
})
export class PusherService {
  // pusher.service.ts
  declare Pusher: any;
  pusher: any;
  channel: any;
  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.PUSHER_APP_KEY, {
      cluster: environment.pusher.PUSHER_APP_CLUSTER,
    });
    this.channel = this.pusher.subscribe('events-channel');
  }

  like(num_likes) {
    this.http
      .post('http://localhost:3120/update', { likes: num_likes })
      .subscribe((data) => {});
  }
} //end of class
