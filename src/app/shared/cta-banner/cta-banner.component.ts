import { Component, Input, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

type DemoPayload = {
  name: string; email: string; phone?: string; message?: string;
};
@Component({
  selector: 'app-cta-banner',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() buttonLabel = '';
  /** Optional logo (dummy) that links to product page */
  @Input() logoSrc = '';
  @Input() logoAlt = '';

  /** Preselect product name in form (optional) */
  @Input() productName?: string;
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  showModal = signal(false);
  loading = signal(false);
  sent = signal(false);
  error = signal<string | null>(null);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    message: [''],
  });

  ngOnInit() {

  }

  openModal() {
    this.error.set(null);
    this.showModal.set(true);
    document.body.classList.add('no-scroll');      // lock page scroll
  }
  closeModal() {
    this.showModal.set(false);
    document.body.classList.remove('no-scroll');   // unlock
  }
  ngOnDestroy() { document.body.classList.remove('no-scroll'); }
  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.error.set(null);

    // TODO: swap with your real API endpoint or email service
    // Example endpoint constant: /api/contact/demo-request

const formData = new FormData();
formData.append('name', this.form.value.name ?? '');
formData.append('email', this.form.value.email ?? '');
formData.append('phone', this.form.value.phone ?? '');
formData.append('message', this.form.value.message ?? '');
formData.forEach((value, key) => {
  console.log(key, value);
});
    this.http.post('https://www.safevigsolutions.com/phpemailservices/Send-Mail-Services_contactus.php', formData).subscribe({
      next: () => { this.sent.set(true); this.loading.set(false); this.form.reset(); this.closeModal(); },
      error: () => { this.error.set('Something went wrong. Please try again.'); this.loading.set(false); }
    });
  }

  hasError(ctrl: string, err: string) {
    const c = this.form.get(ctrl);
    return !!c && c.touched && c.hasError(err);
  }

}
