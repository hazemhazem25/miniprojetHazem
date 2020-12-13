import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniprojet';
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBiYUY8rHcfRBa0TQIo6fKwLh8tRnr-IV8',
      authDomain: 'voiture-83.firebaseapp.com',
      projectId: ' voiture-83',
      storageBucket: 'voiture-83.appspot.com',
      messagingSenderId: '798227002054',
      appId: '1:798227002054:web:2a3ab86651521986a99dc7',
      measurementId: 'G-0N6CPFGV0J'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    // tslint:disable-next-line:prefer-const
    let actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: 'https://www.example.com/finishSignUp?cartId=1234',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'example.page.link'
    };
  }
}
