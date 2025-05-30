import { Service } from './service';
import { Permission } from './permission';
// import { FolderFiles } from './folder-files';
// import { Menu } from './menu';

export interface User {
  uuid?: any;
  id?: any;
  civilite?: string;
  sexe?: string;
  libelle?: string;
  username?: string;
  nom?: string;
  prenom?: string;
    telephone?: string;
  contact?: string;
  fonction?: string;
  service?: Service;
  email?: string;
  password?: string;
  // menus?: Menu[];
  role?: any[];
  droits?: Permission[];
  // folder?: FolderFiles;
   folder?: string;
  photo?: string;
  photoSrc?: string;
  createdAt?: string;
  updatedAt?: string;
  create?: string;
  update?: string;
}
