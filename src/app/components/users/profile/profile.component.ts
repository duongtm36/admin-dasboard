import { Component } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  config = {
    moduleLabel: "User management",
    fnLabel: "Profile",
    items: [],
    limit: 10,
    total: 0,
    breadcrumb: ["Home", "User management"],
    activeItem: "Profile",
  };

  activeTab: string = "account";

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
