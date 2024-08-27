import { NgModule } from "@angular/core";
import { FormBuilder, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RoleComponent } from "./role/role.component";
import { AdminComponent } from "./admin/admin.component";
import { GroupComponent } from "./group/group.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HistoryComponent } from "./history/history.component";
import { ProfileComponent } from "./profile/profile.component";
import { CustomerComponent } from "./customer/customer.component";
import { AccountComponent } from "./profile/account/account.component";
import { LoaderService } from "src/app/shared/services/loader.service";
import { SecurityComponent } from "./profile/security/security.component";
import { CeateRoleComponent } from "./role/ceate-role/ceate-role.component";
import { CreateCustomerComponent } from "./customer/create/create.component";
import { RoleDetailsComponent } from "./role/role-details/role-details.component";
import { CreateAdminComponent } from "./admin/create-admin/create-admin.component";
import { CreateGroupComponent } from "./group/create-group/create-group.component";
import { GroupDetailsComponent } from "./group/group-details/group-details.component";
import { AdminDetailsComponent } from "./admin/admin-details/admin-details.component";
import { CustomerDetailsComponent } from "./customer/customer-details/customer-details.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    RoleComponent,
    AdminComponent,
    GroupComponent,
    HistoryComponent,
    ProfileComponent,
    AccountComponent,
    CustomerComponent,
    SecurityComponent,
    CeateRoleComponent,
    CreateGroupComponent,
    CreateAdminComponent,
    RoleDetailsComponent,
    GroupDetailsComponent,
    AdminDetailsComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
  ],
  providers: [LoaderService],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    FormsModule,
    NgApexchartsModule,
  ],
})
export class UsersModule {}
