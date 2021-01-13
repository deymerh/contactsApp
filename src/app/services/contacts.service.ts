import { Injectable } from '@angular/core';
import { Contact} from '../models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[];

  constructor() {
    this.contacts = [];
   }
  
  get(){
    if(localStorage.getItem('contacts') === null) {
      this.contacts = [];
    } else {
      this.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return this.contacts;
  }
  
  save(contact:Contact){
    this.contacts.push(contact);
    let contacts = [];
    if(localStorage.getItem('contacts') === null) {
      contacts = [];
      contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts.push(contact); 
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  
  delete(contact:Contact){
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact == this.contacts[i]) {
        this.contacts.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    }
  }

  birthday(){
    let fecha = new Date();
    let currencyDate = fecha.toLocaleDateString();
    let diaMes =  fecha.getUTCDate();
    diaMes = diaMes > 9 ? diaMes : parseInt('0'+ diaMes);
    let mes = fecha.getUTCMonth() + 1;
    let mesActual = '0' + mes;
    let anio = fecha.getFullYear();
    currencyDate = `${anio}-${mesActual}-${diaMes}`;
    
    let contacts = [];
    if (localStorage.getItem('contacts') === null) {
      this.contacts = [];
      return this.contacts;
    }else{
      contacts = JSON.parse(localStorage.getItem('contacts'));
      let birthdayPresent =  this.contacts.filter(item => item.dateField == currencyDate)
      return birthdayPresent;
    }
  }
}
