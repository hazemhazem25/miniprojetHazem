import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../shared/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;
  constructor(private  formBuilder: FormBuilder,
              private  authentificationService: AuthentificationService,
              private router: Router) { }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,4}/)]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit(){
    const  email = this.signinForm.get('email').value;
    const  password = this.signinForm.get('password').value;
    this.authentificationService.signInUser(email, password).then(() => {
        this.router.navigate(['/connexion/Home']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
