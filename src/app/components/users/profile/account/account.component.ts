import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

interface User {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  country?: string;
  city?: string;
  imgPath?: string;
}

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class AccountComponent implements OnInit {
  imgSrc: string | null = null;
  user: User = {
    name: "Jaydon Frankie",
    email: "demo@example.com",
    phone: "55555555",
    address: "90210 Broadway Blvd",
    country: "Canada",
    city: "San Francisco",
    imgPath:
      "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp",
  };

  formGroup = new FormGroup({
    name: new FormControl<string>(this.user.name),
    email: new FormControl<string>(this.user.email),
    phone: new FormControl<string>(this.user.phone),
    address: new FormControl<string>(this.user.address),
    country: new FormControl<string>(this.user.country),
    city: new FormControl<string>(this.user.city),
    imgPath: new FormControl<string>(this.user.imgPath),
  });

  constructor() {}

  ngOnInit() {}

  onChangesProfile() {
    this.user = { ...this.user, ...this.formGroup.value };

    if (this.imgSrc) {
      this.user.imgPath = this.imgSrc;
    }

    console.log("new data: ", this.user);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imgSrc = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
