import { Injectable, OnDestroy } from '@angular/core';
import { Address, Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService implements OnDestroy {

  contactList: Contact[] = [];

  constructor() {
    this.contactList = JSON.parse(localStorage.getItem("contactList") || '[]');
  }
  ngOnDestroy(): void {
    localStorage.setItem("contactList", JSON.stringify(this.contactList));
  }

  addContact(addressList: Address[], name: string) {
    let contact: Contact = {
      name: name,
      address: addressList
    };
    this.contactList.push(contact);
    localStorage.setItem("contactList", JSON.stringify(this.contactList));
  }

  getContact() {
    let cloneList: Contact[] = [];
    this.contactList.forEach(x => { cloneList.push(Object.assign({}, x)) });
    return cloneList;
  }

  deleteContact(i: number) {
    this.contactList.splice(i, 1);
    localStorage.setItem("contactList", JSON.stringify(this.contactList));
  }
}
