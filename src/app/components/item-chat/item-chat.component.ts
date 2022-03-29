import { Component, Input, OnInit } from '@angular/core';
import { ChatsI } from '../../tab1/tab1.page';

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
