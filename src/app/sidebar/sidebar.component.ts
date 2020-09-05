import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Store} from "@ngrx/store";
import {PrincipalState} from "../shared/store/principal.state";
import {Principal} from "../shared/store/principal.model";
import {state} from "@angular/animations";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private principal : Principal;

  constructor(private store: Store<PrincipalState>) { }

  ngOnInit(): void {
    this.store.select('principal').subscribe( state => {
      this.principal = state;
    });
  }

  hasRoleUser(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(
      item => {
        if(item.authority === "ROLE_USER")
          hasRole = true;
      }
    );
    return hasRole;
  }

  hasRoleAdmin(){
    let hasRole: boolean = false;
    this.principal.authorities.forEach(
      item => {
        if(item.authority === "ROLE_ADMIN")
          hasRole = true;
      }
    );
    return hasRole;
  }

}
