import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ItemContactComponent } from './components/item-contact/item-contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { FormComponent } from './components/form/form.component';
import { ContactsService } from './services/contacts.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ItemContactComponent,
    ContactListComponent,
    AddContactComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
