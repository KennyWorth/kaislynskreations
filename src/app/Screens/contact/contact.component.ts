import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  errorString: string = '';

  contactForm = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    message: ['']
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  onSubmit() {
    if (this.validateForm()) {
      this.sendEmail();
      this.router.navigate(['']);
    }
  }

  sendEmail() {
    var data = {
      to_name: 'Kaislyn',
      from_name: this.contactForm.value.name,
      message: `
      Name: ${this.contactForm.value.name}
      \nEmail: ${this.contactForm.value.email}
      \nPhone: ${this.contactForm.value.phone}
      \nMessage: ${this.contactForm.value.message}
      `,
      reply_to: this.contactForm.value.email,
    }
    emailjs
      .send('service_w52jnl1', 'template_9rw094l', data, {
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
    if (!this.contactForm.value.name) {
      this.errorString = 'name';
      return false;
    }
    if (!this.contactForm.value.email) {
      this.errorString = 'email';
      return false;
    }
    if (!this.contactForm.value.phone) {
      this.errorString = 'phone';
      return false;
    }
    if (!this.contactForm.value.message) {
      this.errorString = 'message';
      return false;
    }
    return true;
  }

}
