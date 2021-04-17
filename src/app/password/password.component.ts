import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor (private route: RoutingService, private accnt: AccountService) {}

  ngOnInit() {
  }

  save(): void {
    //make it so that the current is indeed the current
    //then make new method for saving just the password
  }

  switchToUser() {
    this.route.onShowSignedInUser();
  }
  
}