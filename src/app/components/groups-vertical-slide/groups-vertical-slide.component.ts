import { Component, Input, OnInit } from '@angular/core';
import { GroupI } from 'src/app/tab1/tab1.page';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-groups-vertical-slide',
  templateUrl: './groups-vertical-slide.component.html',
  styleUrls: ['./groups-vertical-slide.component.scss'],
})
export class GroupsVerticalSlideComponent implements OnInit {
  @Input() groups: GroupI[];

  config: SwiperOptions = {
    slidesPerView: 4.5,
  };
  constructor() {}

  ngOnInit() {}
}
