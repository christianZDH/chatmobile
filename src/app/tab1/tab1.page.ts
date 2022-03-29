import { Component, OnInit } from '@angular/core';

export interface ChatsI {
  img: string;
  title: string;
  lastMessage: string;
  time: string;
  unRead: number;
  status: boolean;
}

export interface GroupI {
  title: string;
  img: string;
  live: boolean;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  chats: ChatsI[] = [];
  groups: GroupI[] = [];
  constructor() {}

  ngOnInit(): void {
    this.chats = [
      {
        img: 'assets/images/image1.png',
        title: 'tecnogeeks',
        lastMessage: 'Non fringillanam ornare urna tellus ac.',
        time: '12:34 PM',
        unRead: 312,
        status: true,
      },
      {
        img: 'assets/images/image2.png',
        title: 'darlene robertson',
        lastMessage: 'Sit gravida amet volutpat malesuada duis rhoncus.',
        time: '12:07 PM',
        unRead: 312,
        status: true,
      },
      {
        img: 'assets/images/image3.png',
        title: 'jacob jones',
        lastMessage: 'Sit gravida amet volutpat malesuada duis rhoncus.',
        time: '11:56 PM',
        unRead: 12,
        status: true,
      },
      {
        img: 'assets/images/image4.png',
        title: ' marketing',
        lastMessage: 'Sit gravida amet volutpat malesuada duis rhoncus.',
        time: 'Yesterday',
        unRead: 0,
        status: false,
      },
      {
        img: 'assets/images/image5.png',
        title: 'family',
        lastMessage: 'Sit gravida amet volutpat malesuada duis rhoncus.',
        time: 'Thursday',
        unRead: 0,
        status: false,
      },
      {
        img: 'assets/images/image6.png',
        title: 'jenny wilson',
        lastMessage: 'Sit gravida amet volutpat malesuada duis rhoncus.',
        time: 'Thursday',
        unRead: 0,
        status: false,
      },
    ];

    this.groups = [
      { title: 'tecnogeeks', live: true, img: 'assets/images/image1.png' },
      { title: 'marketing', live: false, img: 'assets/images/image4.png' },
      { title: 'family', live: false, img: 'assets/images/image5.png' },
      { title: 'school', live: false, img: 'assets/images/image7.png' },
      { title: 'tramite', live: false, img: 'assets/images/image8.png' },
    ];
  }
}
