import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Permission } from '@model/permission';
import { Service } from '@model/service';
import { User } from '@model/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmitterService } from '@service/emiter/emiter.service';
import { UserService } from '@service/user/user.service';
import { Globals } from '@theme/utils/globals';
import { PermissionAddComponent } from '@utilisateur/permission/permission-add/permission-add.component';
import { ServiceAddComponent } from '@utilisateur/service/service-add/service-add.component';
import { NgxPermissionsService } from 'ngx-permissions';
import Swal from 'sweetalert2';
import { UserRestPasswordComponent } from '../user-rest-password/user-rest-password.component';
import { UserAddComponent } from '../user-add/user-add.component';
import { MenuAddComponent } from '@utilisateur/menus/menu-add/menu-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  publicUrl = environment.publicUrl;
  filter: any;
  type: string = "USER";
  durer: string = "";
  etat: boolean = false;
  users: User[] = [];
  // menus: Menu[] = [];
  permissions: Permission[] = [];
  services: Service[] = [];
  dtOptions: any = {};
  visibilite: boolean = false;
  global = {country: Globals.country, device: Globals.device}
  userSession = Globals.user
  typeRow = [
    { label: 'UTILISATEUR', value: 'USER' },
    { label: 'SERVICE', value: 'SERVICE' },
    { label: 'PERMISSION', value: 'PERMISSION' },
    { label: 'MENU', value: 'MENU' },
  ]
  etatRow = [];
  categorieRow = [];
  nameTitle: string = "Nom prénoms / Raison sociale"
  minTitle: string = "Montant MIN"
  maxTitle: string = "Montant MAX"
  code: boolean = true
  categorieTitle: string = "Type de utilisateur"
  etatTitle: string = "Disponibilité ?"

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 8000,
    timerProgressBar: true
  })

  constructor(
    public router: Router,
    private modalService: NgbModal,
    private emitter: EmitterService,
    // private menuService: MenuService,
    private userService: UserService,
    // private filterService: FilterService,
    // private serviceService: ServiceService,
    private permissionService: NgxPermissionsService,
    private permissionsService: NgxPermissionsService
  ) {
    // const permission = JSON.parse(localStorage.getItem('permission-zen')) ? JSON.parse(localStorage.getItem('permission-zen')) : [];
    // this.userService.getList(null, null).subscribe(res => {
    //   this.etat = res ? true : false
    //   this.users = res;
    // }, error => {});
    // this.permissionsService.loadPermissions(permission);
  }

  ngOnInit(): void {
   
  }

  onFilter($event) {}
  onChangeLoad($event) {}

  addUser() {
    this.modalService.dismissAll()
    this.userService.edit = false
    this.modal(UserAddComponent, 'modal-basic-title', 'lg', true, 'static')
  }
  editUser(row) {
    this.modalService.dismissAll()
    this.userService.setUser(row)
    this.userService.edit = true
    this.modal(UserAddComponent, 'modal-basic-title', 'lg', true, 'static')
  }

  addPermission() {
    this.modalService.dismissAll()
    // this.permissionService.edit = false
    this.modal(PermissionAddComponent, 'modal-basic-title', 'lg', true, 'static')
  }
  addService() {
    this.modalService.dismissAll()
    // this.serviceService.edit = false
    this.modal(ServiceAddComponent, 'modal-basic-title', 'lg', true, 'static')
  }
  addMenu() {
    this.modalService.dismissAll()
    // this.menuService.edit = false
    this.modal(MenuAddComponent, 'modal-basic-title', 'lg', true, 'static')
  }
  restPassword() {
    this.modalService.dismissAll()
    this.modal(UserRestPasswordComponent, 'modal-basic-title', 'lg', true, 'static')
  }
  resetAccess() {
    this.modalService.dismissAll();
    // this.modal(UserAccessComponent, 'modal-basic-title', 'md', true, 'static');
  }

  modal(component, type, size, center, backdrop) {
    this.modalService.open(component, {
      ariaLabelledBy: type,
      size: size,
      centered: center,
      backdrop: backdrop
    }).result.then((result) => { }, (reason) => { });
  }
}
