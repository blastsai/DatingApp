import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable } from 'rxjs';
import { User } from '../_modules/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.isDropdownOpen = false;
    }, error => {
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
    }

  isDropdownOpen: boolean = false;
  selectedItem: string = '';

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(item: string): void {
    this.selectedItem = item;
    this.isDropdownOpen = false;
  }
}
