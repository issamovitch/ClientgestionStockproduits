import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProduitComponent} from "./produit/produit.component";
import {Produit} from "./produit/produit.model";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProduitService} from "./produit/produit.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppService} from "./app.service";
import {XhrInterceptor} from "./shared/xhr.interceptor";
import {CookieService} from "ngx-cookie-service";
import { UserComponent } from './user/user.component';
import {StoreModule} from "@ngrx/store";
import {principalReducer} from "./shared/store/principal.reducer";
import {User} from "./user/user.model";
import {UserService} from "./user/user.service";
import { CrudComponent } from './shared/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({principal : principalReducer})
  ],
  providers: [
    ProduitService,
    Produit,
    AppService,
    {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true},
    CookieService,
    User,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
