import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

import { AppComponent } from './app.component';
import { CustomDualListComponent } from './custom-dual-list/custom-dual-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDualListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AngularDualListBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
