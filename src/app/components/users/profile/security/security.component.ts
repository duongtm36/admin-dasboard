import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-security",
  templateUrl: "./security.component.html",
  styleUrls: ["./security.component.scss"],
})
export class SecurityComponent implements OnInit {
  public show: boolean = false;
  constructor() {}

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }
}
