import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  jobOpenings = [
    { title: 'Drug Safety Associate', experience: '1–3 yrs', location: 'Hyderabad' },
    { title: 'Signal Detection Analyst', experience: '3–5 yrs', location: 'Remote' },
    { title: 'Aggregate Report Specialist', experience: '2+ yrs', location: 'Bangalore' },
    { title: '.NET Core Developer', experience: '2–5 yrs', location: 'Hyderabad / Remote' },
    { title: 'Angular 18 Frontend Engineer', experience: '3+ yrs', location: 'Chennai' },
    { title: 'Python Django Backend Developer', experience: '2–4 yrs', location: 'Pune' }
  ];

  onSubmit(){
    // Handle form submission logic here
    console.log('Form submitted');
  }
}
