import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { PressReleaseService } from '../../services/press-release.service';
import { PressRelease } from '../../model/press-release.model';

@Component({
  standalone: true,
  selector: 'app-press-release-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './press-release-detail.component.html',
  styleUrls: ['./press-release-detail.component.scss']
})
export default class PressReleaseDetailComponent implements OnInit {
  item?: PressRelease;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prs: PressReleaseService
  ) {}

  ngOnInit(): void {
    // ensure data is loaded (safe even if already loaded)
    this.prs.load();
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
