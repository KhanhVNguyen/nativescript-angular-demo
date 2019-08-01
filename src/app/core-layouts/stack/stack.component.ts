import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  orientation = 'horizontal'
  constructor() { }

  ngOnInit() {
  }

  toggleOrientation() {
    this.orientation = this.orientation === "horizontal" ? "vertical" : "horizontal"
  }
}
