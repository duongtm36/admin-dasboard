import { Component, Input } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Group, GROUP } from "src/app/shared/data/tables/group";
import { Employee, employeeDB } from "src/app/shared/data/tables/employee";

@Component({
  selector: "app-create-group",
  templateUrl: "./create-group.component.html",
  styleUrl: "./create-group.component.scss",
})
export class CreateGroupComponent {
  formGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    status: new FormControl(true),
    descrition: new FormControl(""),
    users: new FormControl([]),
    searchQuery: new FormControl(""),
  });

  @Input() group?: Group;
  @Input() modalTitle: string = "Create Group";

  employees = employeeDB.emp;
  displayedEmployees = [];
  activeUserGroup: { [key: number]: boolean } = {};

  constructor(
    public activeModal: NgbActiveModal,
    public form: FormBuilder,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    if (this.group) {
      // Gán giá trị của group vào form edit
      this.formGroup.patchValue(this.group);

      // Cập nhật activeUserGroup và sắp xếp displayedEmployees
      this.activeUserGroup = (this.group.users || []).reduce((acc, userId) => {
        acc[userId] = true;
        return acc;
      }, {} as { [key: number]: boolean });

      this.updateDisplayedEmployees();
    } else {
      this.updateDisplayedEmployees();
    }

    this.formGroup.controls.searchQuery?.valueChanges.subscribe((value) => {
      this.filterEmployees(value);
    });
  }

  create() {
    if (this.formGroup.valid) {
      const formValue = this.formGroup.value;

      // Kiểm tra nhóm tồn tai chưa
      if (this.group) {
        // Cập nhật thông tin nhóm hiện tại
        this.group.name = formValue.name;
        this.group.descrition = formValue.descrition;
        this.group.status = formValue.status;
        this.group.users = formValue.users;

        // Cập nhật nhóm trong danh sách nhóm
        const index = GROUP.findIndex((group) => group.id === this.group.id);
        if (index !== -1) {
          GROUP[index] = this.group;
        }
      } else {
        const newGroup: Group = {
          id: Math.random(),
          name: formValue.name,
          descrition: formValue.descrition,
          status: formValue.status,
          users: formValue.users,
        };

        GROUP.push(newGroup);
      }

      // Đóng modal
      this.activeModal.dismiss();
    } else {
      // Xử lý khi form không hợp lệ
      console.log("Form is not valid");
    }
  }

  getTotalEmployees(): number {
    return employeeDB.emp.length;
  }

  filterEmployees(query: string) {
    if (query) {
      this.displayedEmployees = this.employees
        .filter((employee) =>
          employee.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((employee) => ({
          ...employee,
          isActive: this.activeUserGroup[employee.id] || false,
        }));
    } else {
      this.displayedEmployees = this.employees;
    }
    this.displayedEmployees.sort((a, b) => b.isActive - a.isActive);
  }

  addUserToGroup(employee: Employee) {
    const currentUsers = this.formGroup.get("users")?.value || [];

    // Kiểm tra người id đã tồn tại chưa
    const index = currentUsers.indexOf(employee.id);

    if (index === -1) {
      currentUsers.push(employee.id);
      this.activeUserGroup[employee.id] = true;
    } else {
      currentUsers.splice(index, 1);
      this.activeUserGroup[employee.id] = false;
    }

    this.formGroup.get("users")?.setValue(currentUsers);

    this.displayedEmployees = this.displayedEmployees.map((emp) => ({
      ...emp,
      isActive: currentUsers.includes(emp.id),
    }));
  }

  updateDisplayedEmployees() {
    this.displayedEmployees = this.employees.map((employee) => ({
      ...employee,
      isActive: this.activeUserGroup[employee.id] || false,
    }));

    this.sortDisplayedEmployees();
  }

  sortDisplayedEmployees() {
    this.displayedEmployees.sort((a, b) => b.isActive - a.isActive);
  }

  activeGroup(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.formGroup.get("status")?.setValue(inputElement.checked);
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
