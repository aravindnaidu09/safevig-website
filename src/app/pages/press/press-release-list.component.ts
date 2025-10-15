import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PressReleaseService } from '../../services/press-release.service';
import { PressRelease } from '../../model/press-release.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-press-release-list',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './press-release-list.component.html',
  styleUrls: ['./press-release-list.component.scss']
})
export default class PressReleaseListComponent implements OnInit {
  // filters
 private route = inject(ActivatedRoute);
  private router = inject(Router);
  prs = inject(PressReleaseService);


  from = signal<string>('');
  to = signal<string>('');
  q = signal<string>('');

  constructor() {}

  ngOnInit(): void {
    this.prs.loadOnce();
  }

  readonly filtered = computed<PressRelease[]>(() => {
    const all = this.prs.all();
    if (!all?.length) return [];
    const f = this.from(), t = this.to(), q = this.q().toLowerCase().trim();

    return all.filter(item => {
      const d = item.publishedOn;
      const inFrom = !f || d >= f;
      const inTo   = !t || d <= t;
      const inQ    = !q || [item.title, item.name, item.client?.name, item.summary]
                        .filter(Boolean)
                        .some(v => (v as string).toLowerCase().includes(q));
      return inFrom && inTo && inQ;
    }).sort((a,b) => b.publishedOn.localeCompare(a.publishedOn));
  });

  onImgError(event: Event) {
  const el = event.target as HTMLImageElement;
  el.src = 'assets/Logos/SaveVigShortLogo.png';
}

  trackById = (_: number, it: { id?: string }) => it?.id ?? _;
}
