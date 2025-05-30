import { Categorie } from "./categorie.interface"

export interface SousCategorie {
    id?: number,
    code?: string,
    uuid?: string,
    name?: string,
    category?: Categorie
    flag?: string,
    status?: boolean,
    created_at?: string
    updated_at?: string
    create?: string
    update?: string
  }
  