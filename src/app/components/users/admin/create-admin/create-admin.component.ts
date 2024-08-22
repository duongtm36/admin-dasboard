import { Component, input, Input } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ADMIN, Admin } from "src/app/shared/data/tables/admin";

@Component({
  selector: "app-create-admin",
  templateUrl: "./create-admin.component.html",
  styleUrl: "./create-admin.component.scss",
})
export class CreateAdminComponent {
  formGroup = new FormGroup({
    gender: new FormControl("male"),
    fullname: new FormControl("", Validators.required),
    status: new FormControl(true),
    phone: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
    dateOfBirth: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: this.form.group({
      city: new FormControl("", Validators.required),
      street: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required),
      postalCode: new FormControl("", Validators.required),
    }),
    profilePicture: new FormControl(""),
    role: new FormControl("admin"),
  });

  @Input() admin?: Admin;
  @Input() modalTitle: string = "Create Admin";

  selectGender: string = "";
  gender = [
    {
      value: "male",
      label: "Mr",
    },
    {
      value: "female",
      label: "Mrs",
    },
  ];

  selectRole: string = "";
  role = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "superadmin",
      label: "Super Admin",
    },
    {
      value: "moderator",
      label: "Moderator",
    },
  ];

  constructor(
    public activeModal: NgbActiveModal,
    public form: FormBuilder,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    if (this.admin) {
      // gán giá trị của admin vào form edit
      console.log("this admin", this.admin);

      this.formGroup.patchValue(this.admin);
    }
  }

  create() {
    // call api
    const formValue = this.formGroup.value;
    if (this.formGroup.valid) {
      if (this.admin) {
        this.admin.id;
        this.admin.email = formValue.email;
        this.admin.role = formValue.role;
        this.admin.profilePicture = formValue.profilePicture;
        this.admin.phone = formValue.phone;
        this.admin.status = formValue.status;
        this.admin.username = formValue.username;
        this.admin.fullname = formValue.fullname;
        this.admin.dateOfBirth = formValue.dateOfBirth;
        this.admin.gender = formValue.gender as "male" | "female";
        this.admin.address = {
          city: formValue.address.city,
          street: formValue.address.street,
          country: formValue.address.country,
          postalCode: formValue.address.postalCode,
        };
      } else {
        const newAdmin: Admin = {
          id: Math.random(),
          role: formValue.role,
          profilePicture: formValue.profilePicture,
          email: formValue.email,
          phone: formValue.phone,
          status: formValue.status,
          username: formValue.username,
          fullname: formValue.fullname,
          dateOfBirth: formValue.dateOfBirth,
          gender: formValue.gender as "male" | "female",
          address: {
            city: formValue.address.city,
            street: formValue.address.street,
            country: formValue.address.country,
            postalCode: formValue.address.postalCode,
          },
        };

        ADMIN.push(newAdmin);
      }
      this.activeModal.dismiss();
    }
  }

  activeAccount(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.formGroup.get("status")?.setValue(inputElement.checked);
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
