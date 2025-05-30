import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { PermissionAddComponent } from './permission/permission-add/permission-add.component';
import { PermissionListComponent } from './permission/permission-list/permission-list.component';
import { PermissionShowComponent } from './permission/permission-show/permission-show.component';
import { ServiceAddComponent } from './service/service-add/service-add.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceShowComponent } from './service/service-show/service-show.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserShowComponent } from './user/user-show/user-show.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditPasswordComponent } from './user/user-edit-password/user-edit-password.component';
import { UserRestPasswordComponent } from './user/user-rest-password/user-rest-password.component';
import { SharedModule } from '@shared/shared.module';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { MenuAddComponent } from './menus/menu-add/menu-add.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuShowComponent } from './menus/menu-show/menu-show.component';
import { MenuAssignToUserComponent } from './menus/menu-assign-to-user/menu-assign-to-user.component';

@NgModule({
  declarations: [
    PermissionAddComponent,
    PermissionListComponent,
    PermissionShowComponent,
    ServiceAddComponent,
    ServiceListComponent,
    ServiceShowComponent,
    UserAddComponent,
    UserShowComponent,
    UserListComponent,
    UserEditPasswordComponent,
    UserRestPasswordComponent,
    MenuAddComponent,
    MenuListComponent,
    MenuShowComponent,
    MenuAssignToUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UtilisateurRoutingModule,
    AngularDualListBoxModule,
  ]
})
export class UtilisateurModule { }
