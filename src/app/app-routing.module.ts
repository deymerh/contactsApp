import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ContactListComponent},
  { path: 'new',component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
