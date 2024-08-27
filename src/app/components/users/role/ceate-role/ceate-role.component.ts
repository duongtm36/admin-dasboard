import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ROLE, Role } from "src/app/shared/data/tables/role";

@Component({
  selector: "app-ceate-role",
  templateUrl: "./ceate-role.component.html",
  styleUrls: ["./ceate-role.component.scss"],
})
export class CeateRoleComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),

    permissions: this.form.group({
      read: new FormControl(false),
      write: new FormControl(false),
      update: new FormControl(false),
      delete: new FormControl(false),
      assign_roles: new FormControl(false),
    }),
  });

  options = [
    {
      value: "read",
      label: "Read",
    },
    {
      value: "write",
      label: "Write",
    },
    {
      value: "update",
      label: "Update",
    },
    {
      value: "delete",
      label: "Delete",
    },
    {
      value: "assign_roles",
      label: "Assign Roles",
    },
  ];

  @Input() role?: Role;
  @Input() modalTitle: string = "Create Role";

  constructor(
    public activeModal: NgbActiveModal,
    public form: FormBuilder,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    if (this.role) {
      // this.formGroup.patchValue(this.role);
      this.formGroup.patchValue({
        // id: this.role.id,
        description: this.role.description || "",
        name: this.role.label,
        permissions: this.convertPermissionsToFormValue(this.role.permissions),
      });
      console.log(this.role);
    }
  }

  convertPermissionsToFormValue(permissions: string[]): any {
    return this.options.reduce((acc, option) => {
      acc[option.value] = permissions.includes(option.value);
      return acc;
    }, {});
  }

  create() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;

      const selectedPermissions: string[] = Object.keys(
        formValue.permissions
      ).filter((permission) => formValue.permissions[permission]);

      if (this.role) {
        this.role.id;
        this.role.label = formValue.name;
        this.role.description = formValue.description;
        this.role.permissions = selectedPermissions;
        this.role.value = formValue.name.replace(/\s+/g, "").toLowerCase();
      } else {
        const newRole: Role = {
          id: Math.random(),
          label: formValue.name,
          description: formValue.description,
          permissions: selectedPermissions,
          value: formValue.name.replace(/\s+/g, "").toLowerCase(),
        };

        ROLE.push(newRole);
      }
      console.log(ROLE);

      this.activeModal.dismiss();
    }
  }
}
