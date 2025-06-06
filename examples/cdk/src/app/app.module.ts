import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CdkTableModule,
    TableComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }