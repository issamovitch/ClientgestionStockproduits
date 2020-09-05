import {Injectable} from "@angular/core";

@Injectable()
export class Produit {
  constructor(public id?: number,
              public ref?: string,
              public quantite?: number,
              public prixUnitaire?: number) {
  }
}
