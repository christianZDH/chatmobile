import { Component, OnInit } from '@angular/core';
import { GroupI } from '../interfaces/group.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  groups: GroupI[] = [];
  constructor() {}

  ngOnInit(): void {
    this.groups = [
      {
        title: 'tecnogeeks',
        live: true,
        img: 'assets/images/image1.png',
        participants: 49,
        lastMessage: 'Aenean sed imperdiet.',
      },
      {
        title: 'marketing',
        live: false,
        img: 'assets/images/image4.png',
        participants: 5,
        lastMessage: 'In sed id facilisi convallis.',
      },
      {
        title: 'family',
        live: false,
        img: 'assets/images/image5.png',
        participants: 12,
        lastMessage: 'Et nunc mattis aliquet.',
      },
      {
        title: 'school',
        live: false,
        img: 'assets/images/image7.png',
        participants: 35,
        lastMessage: 'Non senectus viverra est et.',
      },
    ];
  }
}
