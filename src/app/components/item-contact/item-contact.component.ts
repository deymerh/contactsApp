import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
@Component({
  selector: 'app-item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.css']
})
export class ItemContactComponent implements OnInit {
  @Input() contact: Contact
  constructor(public contactsService:ContactsService ) { }

  ngOnInit(): void {
  }
  delete(contact: Contact){
    if (confirm('Estas seguro de lo que estas haciendo?')) {
      this.contactsService.delete(contact);
    }
  }
}
