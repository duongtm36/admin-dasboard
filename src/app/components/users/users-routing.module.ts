import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

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
        component: CustomerComponent,
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
