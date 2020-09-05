import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProduitComponent} from "./produit/produit.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProduitResolver} from "./produit/produit.resolver";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./user/user.component";
import {UserResolver} from "./user/user.resolver";

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {
    path: "home",
    component: HomeComponent,
    children: [
      {path: "", redirectTo: "/home/(contentOutlet:dashboard)", pathMatch: "full"},
      {path: "produits", component: ProduitComponent, resolve: {produits: ProduitResolver}, outlet: "contentOutlet"},
      {path: "dashboard", component: DashboardComponent, outlet: "contentOutlet"},
      {path: "users", component: UserComponent,  resolve: {users: UserResolver}, outlet: "contentOutlet"},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  providers: [ProduitResolver, UserResolver]
})
export class AppRoutingModule {
}
