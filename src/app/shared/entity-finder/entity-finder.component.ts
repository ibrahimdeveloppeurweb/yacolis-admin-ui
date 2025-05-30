import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '@env/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmitterService } from '@service/emiter/emiter.service';
import { AddEntityFinderComponent } from '@shared/add-entity-finder/add-entity-finder.component';

@Component({
  selector: 'app-entity-finder',
  templateUrl: './entity-finder.component.html',
  styleUrls: ['./entity-finder.component.scss']
})
export class EntityFinderComponent {
  @Input() class = null;
  @Input() idOrUuid = "UUID";
  @Input() isAutoCreate = false;
  @Input() isAdd = false;
  @Input() groups = ['default'];
  @Input() namespace = 'Client';
  @Input() required = false;
  @Input() enabled = true;
  @Input() disabledMessage = 'Désactivé';
  @Input() filterBy: any;
  @Input() label?: any;
  @Input() placeholder = 'Selectionnez un élément';
  @Output() uuid = new EventEmitter();
  @Input() disabled = false;
  @Input() params = [];

  private timeOut = null;
  private throttle = 500;
  public isTyping = false;
  public isSearching = false;
  private request = null;
  public results = [];
  @Input() selected = null;
  public url = environment.serverUrl;
  public publicUrl = environment.publicUrl;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private emitter: EmitterService
  ) {

  }

  ngOnInit(): void {
    this.emitter.event.subscribe((data) => {
      if (data.action === 'EQUIPMENT_ADD' || data.action === 'EQUIPMENT_UPDATED') {
        this.isAdd = false;
      }
    });
  }

  search(value:any) {
    this.isTyping = true;
    if (this.timeOut) {
      if (this.request) {
        this.request.unsubscribe();
      }
      clearTimeout(this.timeOut);
    }
    if (value.trim === '') {
      this.isTyping = false;
      return;
    }
    const body = {interface: 'AGENCY', namespace: this.namespace, class: this.class, groups: this.groups, value: value, params: this.params};
    this.timeOut = setTimeout((value) => {
      this.isTyping = false;
      this.isSearching = true;
      this.emitter.disallowLoading();
      this.request = this.http.post(this.url + '/private/extra/shared/', body).subscribe((res: any) => {
        this.isSearching = false;
        if (res?.status === 'success') {
          this.results = res?.data;
          if (res?.data.length == 0) {
            this.isAdd = true;
          }
        }
      }, (error: any) => {
        this.isSearching = false;
      });
    }, this.throttle);
  }

  select(entity:any) {
    this.results = [];
    this.selected = entity;
    if (this.idOrUuid === 'UUID') {
      this.uuid.emit(entity.uuid);
    }else{
      this.uuid.emit(entity.id);
    }
  }

  clear() {
    this.uuid.emit(null);
    this.selected = null;
    this.results = [];
  }
  onAdd(){
    if (this.class === "Famille") {
      // this.modal(FamilleAddComponent, 'modal-basic-title', 'md', true, 'static')
    } else if (this.class === "SousFamille") {
      // this.modal(SousFamilleAddComponent, 'modal-basic-title', 'md', true, 'static')
    } else if (this.class === "Category") {
      // this.modal(CategoryAddComponent, 'modal-basic-title', 'md', true, 'static')
    }else if (this.class === "EtapeTraitement") {
      // this.modal(EtapeAddComponent, 'modal-basic-title', 'md', true, 'static')
    }else  {
      // this.modal(AddEntityFinderComponent, 'modal-basic-title', 'sm', true, 'static')
    }
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
