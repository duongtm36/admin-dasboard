import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RoleComponent } from "./role/role.component";
import { AdminComponent } from "./admin/admin.component";
import { GroupComponent } from "./group/group.component";
import { ProfileComponent } from "./profile/profile.component";
import { CustomerComponent } from "./customer/customer.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "customer",
        component: CustomerComponent,
      },
      {
        path: "sale",
        component: CustomerComponent,
      },
      {
        path: "sale-admin",
        component: CustomerComponent,
      },
      {
        path: "admin",
        component: AdminComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "group",
        component: GroupComponent,
      },
      {
        path: "role",
        component: RoleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
