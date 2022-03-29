import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  tabSelected: string;
  constructor() {}

  onChangeTab(ev: any) {
    this.tabSelected = ev.tab;
  }
}
