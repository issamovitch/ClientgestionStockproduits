import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {API_URLS} from "./config/api.url.config";
import {CookieService} from "ngx-cookie-service";
import {Store} from "@ngrx/store";
import {PrincipalState} from "./shared/store/principal.state";
import {SAVE_PRINCIPAL} from "./shared/store/save.principal.action";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated: boolean = false;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private cookieService: CookieService,
              private store: Store<PrincipalState>) {
  }

  authenticate(credentials, callback) {
    if (credentials) {

      const token = btoa(credentials.username + ":" + credentials.password)
      this.cookieService.set("token", token);
      const headers = new HttpHeaders({
        authorization: 'Basic ' + token
      });

      this.httpClient.get("http://localhost:8080/api/user", {headers: headers}).subscribe(
        response => {
          if (response['name']) {
            this.authenticated = true;
            this.store.dispatch({
              type: SAVE_PRINCIPAL,
              payload: response
            });
          } else {
            this.authenticated = false;
          }
          return callback && callback();
        });
    } else {
      this.authenticated = false;
    }
  }

  logout(callback) {
    return callback && callback();
  }

}
