import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter, withComponentInputBinding } from '@angular/router';

import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient( withFetch()),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes), provideClientHydration()
  ],
};
