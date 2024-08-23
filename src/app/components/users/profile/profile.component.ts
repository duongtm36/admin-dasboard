import { Component } from "@angular/core";

@Component({
  selector: "app-profile",
  styleUrl: "./profile.component.scss",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent {
  config = {
    total: 0,
    items: [],
    limit: 10,
    fnLabel: "Profile",
    activeItem: "Profile",
    moduleLabel: "User management",
    breadcrumb: ["Home", "User management"],
  };

  activeTab: string = "account";

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
