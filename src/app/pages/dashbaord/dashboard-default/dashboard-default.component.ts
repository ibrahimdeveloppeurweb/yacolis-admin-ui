import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent {
  event = {
    categorie: null,
    code: null,
    count: 10,
    create: null,
    dateD: null,
    dateF: null,
    etat: null,
    max: null,
    min: null,
    name: null,
    autre: null,
    bien: null,
    ordre: "ASC",
    type: "TOUT",
    uuid: null
  }
  type: string = 'TOUT';
  typeRow = [
    {label: 'TOUT', value: 'TOUT'},
    {label: 'PROPRIETAIRE', value: 'OWNER'},
    {label: 'LOCATION', value: 'LOCATION'},
    {label: 'PROGRAMME IMMOBLIER', value: 'PROGRAMME'},
    {label: 'PROJET DE LOTISSEMENT', value: 'LOTISSEMENT'}
  ];

  autreTitle = "Propriétaire";
  autre: boolean = false;
  isPrint: boolean = true;
  autreType = 'ENTITY';
  autreClass= 'Owner';
  autreNamespace= 'Client';
  autreGroups= 'owner';

  bienTitle: string = "Nom du bien"
  bien: boolean = false
  bienType = 'ENTITY';
  bienClass= 'House';
  bienNamespace= 'Client';
  bienGroups= 'house';

  nameTitle: string = "Locataire"
  name: boolean = false;
  nameType = 'TEXT';
  nameClass= 'Tenant';
  nameNamespace= 'Client';
  nameGroups= 'tenant';

  onChangeLoad($event: any) {}
  onFilter($event: any) {}
}
