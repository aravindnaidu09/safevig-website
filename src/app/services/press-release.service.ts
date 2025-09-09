import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PressRelease, PressReleaseFile } from '../model/press-release.model';

@Injectable({ providedIn: 'root' })
export class PressReleaseService {
  private readonly path = 'assets/press-releases.json';

  private _all = signal<PressRelease[]>([]);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  readonly all = computed(() => this._all());
  readonly loading = computed(() => this._loading());
  readonly error = computed(() => this._error());

  constructor(private http: HttpClient) {}

  load(): void {
    this._loading.set(true);
    this.http.get<PressReleaseFile>(this.path).subscribe({
      next: (f) => {
        this._all.set(f?.items ?? []);
        this._loading.set(false);
      },
      error: (e) => {
        this._error.set('Unable to load press releases.');
        this._loading.set(false);
        console.error(e);
      }
    });
  }

  getById(id: string): PressRelease | undefined {
    return this._all().find(i => i.id === id);
  }
}
