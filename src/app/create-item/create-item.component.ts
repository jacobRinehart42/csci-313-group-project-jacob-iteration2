import { Component, OnInit } from '@angular/core';
import { RoutingService } from "../routing.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor (private rout: RoutingService) {}

  ngOnInit() {
  }

  switchToUser() {
    this.rout.onShowSignedInUser();
  }

}