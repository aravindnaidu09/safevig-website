import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
   // provideClientHydration(),
    // The withEventReplay() function is used to replay events that were missed during the initial
    provideRouter(routes, withEnabledBlockingInitialNavigation())
    //provideClientHydration(withEventReplay())
    ]
};
