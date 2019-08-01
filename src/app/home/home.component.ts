import { Component, ViewContainerRef } from '@angular/core';
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ProductDetailComponent } from '../modal/product-detail/product-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  moduleId: module.id,
})
export class HomeComponent {
  public tabSelectedIndex: number;
  public tabSelectedIndexResult: string;
  public myItems: ObservableArray<String> = new ObservableArray<String>();
  public arrayItems = ["United States", "Bulgaria", "Germany", "Denmark", "India", "Spain", "Italy", "Viet Nam", "France", "Russia", "Laos"]

  constructor(private _modalService: ModalDialogService, private _vcRef: ViewContainerRef) {
    this.tabSelectedIndex = 0;
    this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    this.myItems = new ObservableArray<String>(this.arrayItems)
  }

  changeTab() {
    if (this.tabSelectedIndex === 0) {
      this.tabSelectedIndex = 1;
    } else if (this.tabSelectedIndex === 1) {
      this.tabSelectedIndex = 2;
    } else if (this.tabSelectedIndex === 2) {
      this.tabSelectedIndex = 0;
    }
  }

  // displaying the old and new TabView selectedIndex
  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    if (args.oldIndex !== -1) {
      const newIndex = args.newIndex;
      if (newIndex === 0) {
        this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
      } else if (newIndex === 1) {
        this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
      } else if (newIndex === 2) {
        this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
      }
      alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)

    }
  }

  public onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    let searchValue = searchBar.text.toLowerCase();

    this.myItems = new ObservableArray<String>();
    if (searchValue !== "") {
      for (let i = 0; i < this.arrayItems.length; i++) {
        if (this.arrayItems[i].toLowerCase().indexOf(searchValue) !== -1) {
          this.myItems.push(this.arrayItems[i]);
        }
      }
    }
  }

  public onClear(args) {
    let searchBar = <SearchBar>args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a country and press enter";

    this.myItems = new ObservableArray<String>();
    this.arrayItems.forEach(item => {
      this.myItems.push(item);
    });
  }

  openProductDetailModal(e) {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {
        name: e
      },
      fullscreen: true
    };
    this._modalService.showModal(ProductDetailComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }
}
