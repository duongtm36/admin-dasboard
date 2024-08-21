import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ProfileComponent } from "./profile/profile.component";
import { CustomerComponent } from "./customer/customer.component";
import { AccountComponent } from "./profile/account/account.component";
import { LoaderService } from "src/app/shared/services/loader.service";
import { SecurityComponent } from "./profile/security/security.component";
import { CreateCustomerComponent } from "./customer/create/create.component";
import { CustomerDetailsComponent } from "./customer/customer-details/customer-details.component";

@NgModule({
  declarations: [
    CustomerComponent,
    CreateCustomerComponent,
    ProfileComponent,
    AccountComponent,
    SecurityComponent,
    CustomerDetailsComponent,
  ],
  providers: [LoaderService],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
})
export class UsersModule {}
