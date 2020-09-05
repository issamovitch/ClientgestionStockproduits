import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../config/api.url.config";
import {Produit} from "./produit.model";
import {CrudService} from "../shared/crud.service";

@Injectable()
export class ProduitService implements CrudService<Produit, number> {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(API_URLS.PRODUITS_URl)
  }

  add(produit: Produit) {
    return this.http.post(API_URLS.PRODUITS_URl, {
      "ref": produit.ref,
      "quantite": produit.quantite,
      "prixUnitaire": produit.prixUnitaire
    })
  }

  update(produit: Produit) {
    return this.http.put(API_URLS.PRODUITS_URl, {
      "id": produit.id,
      "ref": produit.ref,
      "quantite": produit.quantite,
      "prixUnitaire": produit.prixUnitaire
    })
  }

  delete(id: number) {
    return this.http.delete(API_URLS.PRODUITS_URl + "/" + id);
  }

}
