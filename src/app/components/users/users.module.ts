import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerComponent } from "./customer/customer.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { LoaderService } from "src/app/shared/services/loader.service";
import { CreateCustomerComponent } from "./customer/create/create.component";

@NgModule({
  declarations: [CustomerComponent, CreateCustomerComponent],
  providers: [LoaderService],
  imports: [CommonModule, SharedModule, UsersRoutingModule ],
})
export class UsersModule { }
