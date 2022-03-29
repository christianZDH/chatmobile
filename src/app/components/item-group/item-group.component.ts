import { Component, Input, OnInit } from '@angular/core';
import { GroupI } from '../../interfaces/group.interface';

@Component({
  selector: 'app-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss'],
})
export class ItemGroupComponent implements OnInit {
  @Input() group: GroupI;
  constructor() {}

  ngOnInit() {}
}
