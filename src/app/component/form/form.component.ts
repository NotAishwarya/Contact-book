import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Form, Validators } from '@angular/forms';
import { ContactDataService } from 'src/app/service/contact-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  message: string = "";
  contactForm = this.fb.group({
    uname: ['', [Validators.required, Validators.minLength(3)]],
    uaddress: this.fb.array([
      this.newAddressForm()
    ])
  });;

  constructor(private fb: FormBuilder, private contactDataService: ContactDataService) { }

  addAddressForm() {
    this.getAddressFormArray()?.push(this.newAddressForm());
  }

  getAddressFormGroupAtIndex(i: number) {
    return this.getAddressFormArray().controls[i] as FormGroup;
  }

  newAddressForm() {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.min(100000), Validators.max(1000000)]]
    })
  }

  deleteAddressForm(index: number) {
    this.getAddressFormArray().removeAt(index);
  }

  getAddressFormArray() {
    return (this.contactForm.get('uaddress') as FormArray);
  }

  submitForm() {
    this.contactDataService.addContact(this.contactForm.value.uaddress, this.contactForm.value.uname);
    this.contactForm.reset();
    this.message = "Contact Added!";
    setTimeout(() => { this.message = "" }, 1000);
  }

  ngOnInit(): void {
  }

}
