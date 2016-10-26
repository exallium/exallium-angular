import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = "Exallium";

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onMenuClicked() {
    this.sidenavService.open()
  }
}
