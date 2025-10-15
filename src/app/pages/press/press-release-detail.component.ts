import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { PressReleaseService } from '../../services/press-release.service';
import { PressRelease } from '../../model/press-release.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-press-release-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './press-release-detail.component.html',
  styleUrls: ['./press-release-detail.component.scss']
})
export default class PressReleaseDetailComponent implements OnInit {
  item?: PressRelease;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  prs = inject(PressReleaseService);
  id = toSignal(this.route.paramMap.pipe(map(pm => pm.get('id') ?? '')), { initialValue: '' });

  // derive item from loaded list + id
  it = computed(() => this.prs.all().find(x => x.id === this.id()));
  constructor() {}

  ngOnInit(): void {
    // ensure data is loaded (safe even if already loaded)
    this.prs.loadOnce();
    const id = this.route.snapshot.paramMap.get('id')!;
    // slight delay until load completes in cold start situations
    setTimeout(() => this.item = this.prs.getById(id), 0);
  }

  back(): void { this.router.navigate(['/press-release']); }

  onImgError(event: Event) {
  const el = event.target as HTMLImageElement;
  el.src = 'assets/Logos/SaveVigShortLogo.png';
}
}
