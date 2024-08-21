import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CUSTOMER, Customer } from "src/app/shared/data/tables/customer";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CustomerDetailsComponent } from "../customer-details/customer-details.component";
import { Constants } from "src/app/shared/constants/constant";

@Component({
  selector: "app-create-customer",
  styleUrl: "./create.component.scss",
  templateUrl: "./create.component.html",
})
export class CreateCustomerComponent implements OnInit {
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
  });

  @Input() user?: Customer;
  @Input() modalTitle: string = "Create Customer";

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

  constructor(
    public activeModal: NgbActiveModal,
    public form: FormBuilder,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    if (this.user) {
      // gán giá trị của customẻ vào fỏm edit
      this.formGroup.patchValue(this.user);
    }
  }

  create() {
    // call api
    const formValue = this.formGroup.value;
    if (this.formGroup.valid) {
      if (this.user) {
        this.user.id;
        this.user.email = formValue.email;
        this.user.phone = formValue.phone;
        this.user.status = formValue.status;
        this.user.username = formValue.username;
        this.user.fullname = formValue.fullname;
        this.user.dateOfBirth = formValue.dateOfBirth;
        this.user.gender = formValue.gender as "male" | "female";
        this.user.address = {
          city: formValue.address.city,
          street: formValue.address.street,
          country: formValue.address.country,
          postalCode: formValue.address.postalCode,
        };
      } else {
        const newCustomer: Customer = {
          id: Math.random(),
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

        CUSTOMER.push(newCustomer);
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
