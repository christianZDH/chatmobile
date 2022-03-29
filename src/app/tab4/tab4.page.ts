import { Component, OnInit } from '@angular/core';

interface OptionI {
  icon: string;
  title: string;
  subtitle?: string;
  detail: boolean;
}
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  options: OptionI[] = [];
  constructor() {}

  ngOnInit() {
    this.options = [
      {
        icon: 'person-outline',
        title: 'Account',
        subtitle: 'Name, City, Phone',
        detail: true,
      },
      { icon: 'notifications-outline', title: 'Notifications', detail: true },
      {
        icon: 'lock-closed-outline',
        title: 'Security and Privacy',
        detail: true,
      },
      { icon: 'pie-chart-outline', title: 'Storage', detail: true },
      {
        icon: 'chatbubbles-outline',
        title: 'Chats',
        subtitle: 'Themes and Personalization',
        detail: true,
      },
      { icon: 'phone-portrait-outline', title: 'Devices', detail: true },
      { icon: 'alert-circle-outline', title: 'Help', detail: true },
    ];
  }
}
