import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { GroupVerticalSlideI } from '../../interfaces/group.interface';

@Component({
  selector: 'app-groups-vertical-slide',
  templateUrl: './groups-vertical-slide.component.html',
  styleUrls: ['./groups-vertical-slide.component.scss'],
})
export class GroupsVerticalSlideComponent implements OnInit {
  @Input() groups: GroupVerticalSlideI[];

  config: SwiperOptions = {
    slidesPerView: 4.5,
  };
  constructor() {}

  ngOnInit() {}
}
