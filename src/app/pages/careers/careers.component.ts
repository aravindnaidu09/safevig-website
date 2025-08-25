import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-careers',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

  constructor(private http: HttpClient) {}
    private fb = inject(FormBuilder);
  jobOpenings = [
    { title: 'Sales & Business Development Executive (Clinical Services)', experience: '4–5 yrs', location: 'Hyderabad' },
    { title: 'Drug Safety Associate', experience: '1–3 yrs', location: 'Hyderabad' },
    { title: 'Signal Detection Analyst', experience: '3–5 yrs', location: 'Remote' },
    { title: 'Aggregate Report Specialist', experience: '2+ yrs', location: 'Hyderabad' },
    { title: '.NET Core Developer', experience: '2–5 yrs', location: 'Hyderabad / Remote' },
    { title: 'Angular 18 Frontend Engineer', experience: '3+ yrs', location: 'Hyderabad' },
    { title: 'Python Django Backend Developer', experience: '2–4 yrs', location: 'Hyderabad' }
  ];
isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    applyFor: ['', Validators.required],
    message: [''],
    resume: [null, Validators.required],
  });
 onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.contactForm.patchValue({ resume: file });
    }
  }
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const formData = new FormData();
    for (const key in this.contactForm.value) {
      formData.append(key, this.contactForm.value[key]);
    }

    this.http.post('https://www.safevigsolutions.com/phpemailservices/Send-Mail-Services_career.php', formData, { responseType: 'text' }).subscribe({
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
