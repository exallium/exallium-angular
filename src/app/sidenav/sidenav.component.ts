import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from "../sidenav.service"
import { Subscription } from "rxJs/Subscription"
import { MdSidenav } from "@angular/material"

@Component({
  host: { "(document:click)": 'onLoseFocus()' },
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('start') sidenav: MdSidenav

  pages = [ 
    { "name": "@exallium", "href": "https://www.twitter.com/exallium" },
    { "name": "Github", "href": "https://www.github.com/exallium"}
  ]

  private subscription: Subscription

  constructor(private sidenavService: SidenavService, private _eref: ElementRef) { }

  ngOnInit() {
    this.subscription = this.sidenavService.observable().subscribe(next => {
        console.log(next)
      switch (next) {
        case "open":
          this.sidenav.open();
          focus()
          break;
        case "close":
          this.sidenav.close();
          break;
      }
    })
  }

  ngOnDestroy() {
     this.subscription.unsubscribe()
  }

  onLoseFocus() {
    if (!this._eref.nativeElement.contains(event.target) && this.sidenav._isOpened) {
      this.sidenavService.close()
    }
  }
}