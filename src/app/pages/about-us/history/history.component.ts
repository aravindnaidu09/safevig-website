import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [CommonModule ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
partnerBenefits = [
    {
      title: 'Innovative Technology Integration',
      description:
        'SafeVig harnesses cutting-edge technologies—AI, ML, Blockchain, and Automation—to streamline operations, enhance compliance, and minimize human error.',
      icon: 'bi bi-cpu',
    },
    {
      title: 'Comprehensive End-to-End Solutions',
      description:
        'We offer full lifecycle services from case intake to submissions, reducing overhead and delivering timely, compliant results that power business growth.',
      icon: 'bi bi-diagram-3',
    },
    {
      title: 'Global Expertise, Local Commitment',
      description:
        'With deep industry knowledge and a global footprint, SafeVig delivers domain expertise and local responsiveness tailored to regulatory needs.',
      icon: 'bi bi-globe2',
    },
  ];

timelineData = [
    {
      year: 'JUNE 2023',
      title: 'Founded',
      description: 'SafeVig is founded with an early focus on pharmacovigilance.',
      icon: 'bi bi-search',
      color: 'blue'
    },
    {
      year: '2024',
      title: 'AI Innovation',
      description: 'Introduced AI-powered safety signal detection and automation-driven solutions.',
      icon: 'bi bi-bank',
      color: 'red'
    },
    {
      year: '2025',
      title: 'Global Partner',
      description: 'A global partner for end-to-end regulatory compliance and drug safety solutions.',
      icon: 'bi bi-person-headset',
      color: 'green'
    },
    {
      year: 'TODAY',
      title: 'Expansion',
      description: 'Expanded into regulatory affairs and clinical data management.',
      icon: 'bi bi-shield-check',
      color: 'orange'
    }
  ];
}
