import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import axios from 'axios';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.css']
})
export class OrderDialogComponent {

  @Output() closeDialog = new EventEmitter<void>();
  errorString: String=''

  orderForm = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    braceletType: [''],
    braceletColor: [''],
    braceletSize: [''],
    additionalDetails: ['']
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.validateForm()) {
    this.sendEmail();
    this.closeDialog.emit();
    }
  }

  sendEmail() {
    var data = {
      to_name: 'Kaislyn',
      from_name: this.orderForm.value.name,
      message: `Name: ${this.orderForm.value.name}\nEmail: ${this.orderForm.value.email}\nPhone: ${this.orderForm.value.phone}\nBracelet Type: ${this.orderForm.value.braceletType}\nBracelet Color: ${this.orderForm.value.braceletColor}\nBracelet Size: ${this.orderForm.value.braceletSize}\nAdditional Details: ${this.orderForm.value.additionalDetails}`,
      reply_to: this.orderForm.value.email,
    }
    emailjs
    .send('service_w52jnl1', 'template_rtbfrsi', data, {
      publicKey: 'UPX-Vcrmni7o0u7pM',
      
    })
    .then(
      () => {
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      },
    )
  }
  validateForm() {
    this.errorString = '';
    if (!this.orderForm.value.name) {
      this.errorString = 'name';
      return false;
    }
    if (
      !this.orderForm.value.email 
      || !this.orderForm.value.email.includes('@') 
      || !this.orderForm.value.email.includes('.') 
      || this.orderForm.value.email.length < 5 
      || !this.orderForm.value.email.split('@')[1].includes('.')
      ) {
      this.errorString = 'email';
      return false;
      }
    if (
      !this.orderForm.value.phone 
      || this.orderForm.value.phone.length < 9
      ) {
      this.errorString = 'phone';
      return false;
      }
    if (!this.orderForm.value.braceletType) {
      this.errorString = 'braceletType';
      return false;
      }
    if (!this.orderForm.value.braceletColor || this.orderForm.value.braceletColor.length < 3) {
      this.errorString = 'braceletColor';
      return false;
      }
    if (!this.orderForm.value.braceletSize) {
      this.errorString = 'braceletSize';
      return false;
      }
    if (this.errorString !== '') {
      return false;
    }
    return true;
  }
}
