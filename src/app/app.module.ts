import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './modal/product-detail/product-detail.component';
import { CoreLayoutsComponent } from './core-layouts/core-layouts.component';
import { StackComponent } from './core-layouts/stack/stack.component';
import { WrapComponent } from './core-layouts/wrap/wrap.component';
import { DockComponent } from './core-layouts/dock/dock.component';
import { AbsoluteComponent } from './core-layouts/absolute/absolute.component';
import { FlexComponent } from './core-layouts/flex/flex.component';
import { GridComponent } from './core-layouts/grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductDetailComponent,
    CoreLayoutsComponent,
    StackComponent,
    WrapComponent,
    DockComponent,
    AbsoluteComponent,
    FlexComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
