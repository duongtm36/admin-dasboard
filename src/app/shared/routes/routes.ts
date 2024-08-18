import { Routes } from "@angular/router";


export const content: Routes = [
  {
    path: "users",
    loadChildren: () => import("../../components/users/users.module").then((m) => m.UsersModule),
  },
];

