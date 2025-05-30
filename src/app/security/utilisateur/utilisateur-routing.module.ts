import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { PermissionListComponent } from './permission/permission-list/permission-list.component';


const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "show/:id", component: UserShowComponent },
  { path: "permission", component: PermissionListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
