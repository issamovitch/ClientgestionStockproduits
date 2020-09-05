import {Observable} from "rxjs";


export interface CrudService<T, x> {

  getAll(): Observable<any>;

  add(produit: T);

  update(produit: T);

  delete(id: x)

}
