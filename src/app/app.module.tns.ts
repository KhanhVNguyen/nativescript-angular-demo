import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ModalDialogService } from "nativescript-angular/modal-dialog";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
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
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ModalDialogService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
