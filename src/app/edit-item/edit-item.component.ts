import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  currentItem;

  constructor (private route: RoutingService, public its: ItemsService) {}

  ngOnInit() {
    this.currentItem = this.its.selectedItem;
  }

  save(): void {

  }

  switchToMyItems() {
    this.route.onShowMyItems();
  }

}