import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  total: any = []
  constructor( private router:Router, public contactService: ContactsService ) {
    this.buildForm();
  }
  
  ngOnInit(): void {
  }
  public form: FormGroup; 
  public buildForm(){
    this.form = new FormGroup({
      identificationField:  new FormControl('', [Validators.required, Validators.minLength(6)]),
      nameField: new FormControl('', [Validators.required, Validators.minLength(6)]),
      addressField: new FormControl('', [Validators.required, Validators.minLength(6)]),
      telField: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      dateField: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
  save(event: Event) { 
    event.preventDefault();
    this.contactService.save(this.form.value);
    this.router.navigate([''])
   }
}
