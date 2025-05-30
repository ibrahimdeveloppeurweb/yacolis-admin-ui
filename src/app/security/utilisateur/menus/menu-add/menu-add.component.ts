

import { ToastrService } from 'ngx-toastr';
import { Path } from '@model/path';
import { Menu } from '@model/menu';
import { Globals } from '@theme/utils/globals';
import { Component, OnInit } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
import { PathService } from '@service/path/path.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MenuService } from '@service/menu/menu.service';
import { EmitterService } from '@service/emiter/emiter.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {

  tab = 1;
  keepSorted = true;
  key: string;
  display: string;
  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  userAdd = '';
  disabled = false;
  sourceLeft = true;
	private DEFAULT_FORMAT = {
    add: 'Ajouter',
    remove: 'Supprimer',
    all: 'Tout sélectionner',
    none: 'Annuler',
    direction:
    DualListComponent.LTR,
    draggable: true
  };
  format: any = this.DEFAULT_FORMAT;
  private sourceStations: Array<any>;
  private confirmedStations: Array<any>;
  private stations: Array<any> = [];

  title: string = ""
  type: string = ""
  edit: boolean = false
  menu: Menu
  pathRow: any[]
  form: FormGroup
  submit: boolean = false
  required = Globals.required

  constructor(
    public modal: NgbActiveModal,
    public toastr: ToastrService,
    private formBuild: FormBuilder,
    private emitter: EmitterService,
    private pathService: PathService,
    private menuService: MenuService
  ) {
    this.edit = this.menuService.edit
    this.menu = this.menuService.getMenu()
    this.title = (!this.edit) ? "Ajouter une menu" : "Modifier la menu "+this.menu.libelle
    this.newForm()
  }

  ngOnInit(): void {
    this.pathService.getList('MENU').subscribe(res => {
      if(res){
        res?.forEach(item => {
          this.stations.push({
            key: item?.id,
            station: item?.title,
            state: item?.uuid
          })
        });
        this.editForm()
        this.doReset();
      }
    })
  }

  newForm() {
    this.form = this.formBuild.group({
      uuid: [null],
      id: [null],
      libelle: [null, [Validators.required]],
      description: [null],
      subMenus: this.formBuild.array([])
    })
  }

  editForm() {
    if (this.edit) {
      const data = { ...this.menuService.getMenu() }
      console.log('data',data)
      this.confirmed = data.subMenus
      this.form.patchValue(data)
      this.pathRow = data.subMenus
    }
  }
  setData(){
    this.subMenus.clear();
    this.confirmed.forEach(item =>{
      this.subMenus.controls.push(
        this.formBuild.group({
          uuid: [item?.state],
          libelle: [item?.station],
        })
      );
    })
  }
  onSubmit() {
    this.submit = true;
    if (!this.form.invalid) {
      const data = this.form.getRawValue();
      this.menuService.add(data).subscribe(res => {
        if (res?.status === 'success') {
          this.modal.close('ferme');
          if (this.form.value.uuid) {
            this.emitter.emit({action: 'MENU_UPDATED', payload: res?.data});
          } else {
            this.emitter.emit({action: 'MENU_ADD', payload: res?.data});
          }
        }
      }, error => {
      });
    } else {
      this.toast('Votre formualire n\'est pas valide.', 'Attention !', 'warning');
      return;
    }
  }

  private useStations() {
    this.key = 'key';
    this.display = 'station';
    this.keepSorted = true;
    this.source = this.sourceStations;
    this.confirmed = this.confirmedStations;
  }
  doReset() {
    this.sourceStations = JSON.parse(JSON.stringify(this.stations));
    console.log('sourceStations',this.sourceStations)
    console.log('pathRow',this.pathRow)

    this.confirmedStations = new Array<any>();
    if(this.edit){
      if(this.pathRow.length > 0){
        this.pathRow.forEach(item => {
          this.stations.forEach((key, i) => {
            if(item.id === key.key){ this.confirmedStations.push(this.stations[i]); }
          })
          this.subMenus.controls.push(
            this.formBuild.group({
              uuid: [item?.uuid],
              libelle: [item?.libelle],
            })
          );
        })
      }
    }
    this.useStations();
  }
  filterBtn() { return (this.filter ? 'Hide Filter' : 'Show Filter'); }
  doDisable() { this.disabled = !this.disabled; }
  disableBtn() { return (this.disabled ? 'Enable' : 'Disabled'); }
  swapDirection() {
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
  }
  toast(msg, title, type): void {
    if (type === 'info') {
      this.toastr.info(msg, title);
    } else if (type === 'success') {
      this.toastr.success(msg, title);
    } else if (type === 'warning') {
      this.toastr.warning(msg, title);
    } else if (type === 'error') {
      this.toastr.error(msg, title);
    }
  }
  onClose() {
    this.form.reset();
    this.modal.close("ferme");
  }
  get f() { return this.form.controls }
  get subMenus() { return this.form.get('subMenus') as FormArray; }
}

