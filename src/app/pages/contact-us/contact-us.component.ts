
import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contact: ContactForm = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };
onSubmit(form: any) {
    // Handle form submission logic here
    console.log('Form submitted', form);
  }
}
