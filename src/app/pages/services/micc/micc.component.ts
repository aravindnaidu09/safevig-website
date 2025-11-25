import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CtaBannerComponent } from '../../../shared/cta-banner/cta-banner.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface MiccTestimonial {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number; // 1..5 (optional)
  avatarUrl?: string; // optional
}
@Component({
  selector: 'app-micc',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './micc.component.html',
  styleUrl: './micc.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MiccComponent implements OnInit {
 private http = inject(HttpClient);
  private fb = inject(FormBuilder);
 form = this.fb.group({
     name: ['', [Validators.required, Validators.minLength(2)]],
     email: ['', [Validators.required, Validators.email]],
     phone: [''],
     message: [''],
   });
  showModal = signal(false);
    loading = signal(false);
  sent = signal(false);
  error = signal<string | null>(null);

  // signal keeps it lightweight and future-proof
  testimonials = signal<MiccTestimonial[]>([]);
  loadingTestimonials = signal<boolean>(true);
  errorLoading = signal<boolean>(false);
showReqDemo:boolean=false;
EnableRequest:boolean=false;
  ngOnInit(): void {
    this.loadTestimonials();
  }
  loadTestimonials(): void {
     this.http.get<MiccTestimonial[]>('assets/data/micc-testimonials.json')
      .subscribe({
        next: (list) => {
          this.testimonials.set(Array.isArray(list) ? list : []);
          this.loadingTestimonials.set(false);
        },
        error: () => {
          this.errorLoading.set(true);
          this.loadingTestimonials.set(false);
        }
      });
    }

     scrollToDetails(): void {
    const el = document.getElementById('micc-details');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  
openDemo(): void {
  this.error.set(null);
  this.showModal.set(true);
  document.body.classList.add('no-scroll');
}

closeModal(): void {
  this.EnableRequest = true; // or false if you want to hide Request Demo
  this.showModal.set(false);
  document.body.classList.remove('no-scroll');
}
hasError(ctrl: string, err: string) {
    const c = this.form.get(ctrl);
    return !!c && c.touched && c.hasError(err);
  }
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

  autoScrollInterval: any;

ngAfterViewInit() {
  const scrollContainer = document.querySelector('.tms-scroll');
  if (scrollContainer) {
    this.autoScrollInterval = setInterval(() => {
      if ((scrollContainer as HTMLElement).scrollLeft + (scrollContainer as HTMLElement).clientWidth
          >= (scrollContainer as HTMLElement).scrollWidth) {
        (scrollContainer as HTMLElement).scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        (scrollContainer as HTMLElement).scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 2500);
  }
}
pauseAutoScroll() { clearInterval(this.autoScrollInterval); }
resumeAutoScroll() { this.ngAfterViewInit(); }
 /** MICC Services accordion content **/
 services = [
  {
    title: 'Inquiry Intake & Management',
    items: [
      'Omnichannel capture (email, phone, web, chatbot)',
      'Multilingual support',
      'Validated workflows',
      'Secure documentation'
    ]
  },
  {
    title: 'Inquiry Handling (MIRs, PQCs, AE Intake)',
    items: [
      'Scientifically validated responses',
      'Compliant forwarding to PV/Quality',
      'Timely closure through SLA-driven handling'
    ]
  },
  {
    title: 'Follow-Up & Reconciliation',
    items: [
      'SLA-driven follow-ups',
      'Call reviews & calibrations',
      'Reconciliation reporting'
    ]
  },
  {
    title: 'Global Quality & Compliance',
    items: [
      'Harmonized GxP / ISO / GDPR framework',
      'Controlled content & versioning',
      'Audit & inspection readiness'
    ]
  }
];


  /** Why SafeVig boxes **/
  whyCards = [
    {
      icon: 'fa-solid fa-flask',
      title: 'Pharma-Native',
      desc: 'Built by experts in PV & Medical Affairs for life sciences.'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Compliance First',
      desc: 'Audit-ready frameworks with GxP and GDPR alignment.'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Scalable & Secure',
      desc: 'Enterprise-grade infrastructure with data protection.'
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Faster Value',
      desc: 'Standardized onboarding for faster deployment and ROI.'
    }
  ];
}
