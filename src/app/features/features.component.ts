import { Component, OnInit } from '@angular/core';

@Component({
  host: { "(window:resize)": 'onResize()' },
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  features = [
    {"title": "Fork me @ Github", image: "assets/github-logo.png", href: "https://www.github.com/exallium" },
    {"title": "Blog @ Medium", image: "assets/medium-logo.png", href: "https://blog.exallium.com" },
  ]

  columnCount = this.features.length

  constructor() {
    this.onResize();
   }

  ngOnInit() {
  }

  onResize() {
    if (window.innerWidth < 481) {
      this.columnCount = this.columnCount / 2;
    } else {
      this.columnCount = this.features.length;
    }
  }

}
