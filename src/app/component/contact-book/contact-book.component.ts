import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactDataService } from 'src/app/service/contact-data.service';

@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.scss']
})
export class ContactBookComponent implements OnInit {

  contactList: Contact[] = [];

  constructor(private contactDataService: ContactDataService) {
  }

  ngOnInit(): void {
    this.contactList = this.contactDataService.getContact();
  }

}
