import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contacts:number = 0;
  birthdayPresent:number = 0;
  constructor( public contactService:ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.get().length;
    this.birthdayPresent = this.contactService.birthday().length;
  }
}
