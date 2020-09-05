import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showHideSideBarButton: boolean;

  @Output()
  showHideSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private appService: AppService, private router: Router,) { }

  ngOnInit(): void {
  }

  showHideSideBar() {
    this.showHideSideBarButton = !this.showHideSideBarButton;
    this.showHideSideBarChange.emit(this.showHideSideBarButton);
  }

  logout() {
    this.appService.logout(()=>{
      this.router.navigateByUrl("login");
    });
  }
}
