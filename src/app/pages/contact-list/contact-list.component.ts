import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact} from '../../models/contact';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[]
  constructor( public contactsService:ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactsService.get();
  }

}
