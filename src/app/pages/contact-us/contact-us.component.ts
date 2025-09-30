

import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contact: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }; 
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
const formData = new FormData();
formData.append('name', this.contactForm.value.name ?? '');
formData.append('email', this.contactForm.value.email ?? '');
formData.append('phone', this.contactForm.value.phone ?? '');
formData.append('message', this.contactForm.value.message ?? '');

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';
this.http.post('https://www.safevigsolutions.com/phpemailservices/Send-Mail-Services_contactus.php',  
  formData, { responseType: 'text' }).subscribe({
      next: (res) => {
        this.successMessage = res;
        this.contactForm.reset();
      },
      error: (err) => {
        this.errorMessage = err?.error || 'Failed to send application.';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  
  }
}
