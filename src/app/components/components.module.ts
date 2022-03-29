import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsVerticalSlideComponent } from './groups-vertical-slide/groups-vertical-slide.component';

import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';
import { RectangleComponent } from './rectangle/rectangle.component';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { ItemGroupComponent } from './item-group/item-group.component';

@NgModule({
  declarations: [
    GroupsVerticalSlideComponent,
    RectangleComponent,
    ItemChatComponent,
    ItemGroupComponent,
  ],
  imports: [CommonModule, SwiperModule, IonicModule],
  exports: [
    GroupsVerticalSlideComponent,
    RectangleComponent,
    ItemChatComponent,
    ItemGroupComponent,
  ],
})
export class ComponentsModule {}
