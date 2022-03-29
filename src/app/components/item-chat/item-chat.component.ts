import { Component, Input, OnInit } from '@angular/core';
import { ChatsI } from 'src/app/interfaces/chat.interface';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
})
export class ItemChatComponent implements OnInit {
  @Input() itemChat: ChatsI;
  constructor() {}

  ngOnInit() {}
}
