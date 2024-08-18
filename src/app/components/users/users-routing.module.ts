import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
