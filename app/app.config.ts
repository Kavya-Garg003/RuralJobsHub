import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyC2ytFyai0Z2Q12Y0cBxe98DVp3sP3iqbc",
  authDomain: "career-connect-9296a.firebaseapp.com",
  projectId: "career-connect-9296a",
  storageBucket: "career-connect-9296a.appspot.com",
  messagingSenderId: "269255962787",
  appId: "1:269255962787:web:a610923cb2663461280f16",
  measurementId: "G-HSCWNHWXFF"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
