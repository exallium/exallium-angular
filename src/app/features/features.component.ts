import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features = [
    {"title": "Find me on Github"},
    {"title": "Find me on Medium"},
    {"title": "Stuff I'm interested in"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
