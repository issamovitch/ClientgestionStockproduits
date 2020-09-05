import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../config/api.url.config";
import {CrudService} from "../shared/crud.service";
import {User} from "./user.model";

@Injectable()
export class UserService implements CrudService<User, number> {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.http.get(API_URLS.USERS_URl)
  }

  add(user: User) {
    /*return this.http.post(API_URLS.USERS_URl, {
      "username": user.username,
      "password": user.password,
      "enable": user.enable
    })*/
  }

  update(user: User) {
    /*return this.http.put(API_URLS.USERS_URl, {
      "id": user.id,
      "username": user.username,
      "password": user.password,
      "enable": user.enable
    })*/
  }

  delete(id: number) {
    return this.http.delete(API_URLS.USERS_URl + "/" + id);
  }

}
