import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../routing.service";
import { ItemsService } from "../items.service";

@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"]
})
export class EditItemComponent implements OnInit {
  currentItem;

  constructor(private route: RoutingService, public its: ItemsService) {}

  ngOnInit() {
    this.currentItem = this.its.selectedItem;
  }

  save(
    name,
    askingPrice,
    nicheMarket,
    TimeRanges,
    description,
    dimensions,
    conditionAndAge,
    otherInfo
  ): void {
    this.its.editItem(
      this.currentItem.itemId,
      name,
      askingPrice,
      "seller",
      nicheMarket,
      TimeRanges,
      description,
      dimensions,
      conditionAndAge,
      otherInfo
    );
    this.switchToMyItems();
  }

  switchToMyItems() {
    this.route.onShowMyItems();
  }
}
