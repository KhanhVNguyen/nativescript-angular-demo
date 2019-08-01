import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  data;
  constructor(private _params: ModalDialogParams, private _activeRoute: ActivatedRoute) { 
  }

  ngOnInit(): void { 
    this.data = this._params.context.name;
  }

  onClose(): void {
    this._params.closeCallback("return value");
  }
}
