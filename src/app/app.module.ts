import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactBookComponent } from './component/contact-book/contact-book.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
