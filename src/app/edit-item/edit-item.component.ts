import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor (private route: RoutingService) {}

  ngOnInit() {
  }

  save(): void {

  }

  switchToMyItems() {
    this.route.onShowMyItems();

  }

}