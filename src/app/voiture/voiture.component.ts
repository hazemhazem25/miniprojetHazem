import { Component, OnInit } from '@angular/core';
import {Voiture} from '../model/voiture';
import {VoitureService} from '../shared/voiture.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie';
import {any} from 'codelyzer/util/function';


@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  listVoiture: Voiture[];
  voiture: Voiture;
  listCategorie: Categorie[];
  categorie: Categorie;
  val: string;
  id: number;
  model: any = { voiture: {} };
  constructor(public voitureService: VoitureService , private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      nom: [null, [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+$')]],
      description: [null, [Validators.required, Validators.maxLength(500)]],
      categorie: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      prix: [null, [Validators.required]],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])




    });
  }


  ngOnInit(): void {
    this.voitureService.getVoitures().subscribe(
      (data: Voiture[]) => this.listVoiture = data
    );
    this.voitureService.getCategories().subscribe(
      (data: Categorie[]) => this.listCategorie = data
    );

    this.voiture = new Voiture();
    this.val = 'Ajouter';
    console.log(this.listVoiture);
  }
  onFileChange(event) {

    const reader = new FileReader();



    if ( event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);



      reader.onload = () => {



        this.imageSrc = reader.result as string;



        this.form.patchValue({

          fileSource: reader.result

        });



      };



    }

  }
  submit(form){
    this.voitureService.addVoiture(form).subscribe(() => {
      this.listVoiture = [form, ...this.listVoiture];
      this.voiture.like = 0;

    });
  }
  deleteE(id) {
    this.voitureService.deleteVoiture(id).subscribe(
      () => this.listVoiture = this.listVoiture.filter(voiture => voiture.id !== id)
    );

  }
  update(v ){
    this.val = 'Modifier';
    this.form.setValue({
      id: this.model.voiture.id,
      nom: 'def',
      description: 'def',
      categorie: 'def',
      image: 'def',
      quantity: '0',
      prix: '55',
      fileSource: 'def'
    });
  }
}
