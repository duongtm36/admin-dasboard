import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProfileComponent } from "./profile/profile.component";
import { CustomerComponent } from "./customer/customer.component";
import { AdminComponent } from "./admin/admin.component";
import { CUSTOMER } from "src/app/shared/data/tables/customer";
import { ADMIN } from "src/app/shared/data/tables/admin";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "customer",
        loadComponent: () =>
          import("./customer/customer.component").then(
            (mod) => mod.CustomerComponent
          ),
        // component: CustomerComponent,
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
        loadComponent: () =>
          import("./admin/admin.component").then((mod) => mod.AdminComponent),
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
