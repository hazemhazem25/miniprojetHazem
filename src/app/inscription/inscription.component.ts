import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthentificationService} from '../shared/authentification.service';
import firebase from 'firebase';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
   signupForm: FormGroup;
   errorMessage: string;
  constructor(private  formBuilder: FormBuilder,
              private  authentificationService: AuthentificationService,
              private router: Router) { }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,4}/)]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

async onSubmit() {
  const email = this.signupForm.get('email').value;
  const password = this.signupForm.get('password').value;
  this.authentificationService.createNewUser(email, password).then(() => {
      this.router.navigate(['/connexion/Home']);
    },
    (error) => {
      this.errorMessage = error;
    }
  );
  const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: ' http://localhost:3000 ',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      }
    };

  return await firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings);
  }

}
