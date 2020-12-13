import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {Categorie} from '../model/categorie';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  url = 'http://localhost:3000/Voitures/';
  urll = 'http://localhost:3000/Categories/';
  form: FormGroup;
  constructor(private http: HttpClient) { }

  getVoitures() {
    return this.http.get<Voiture[]>(this.url);
  }
  getCategories() {
    return this.http.get<Categorie[]>(this.urll);
  }

  deleteVoiture(id) {
    return this.http.delete(this.url + id);
  }

  addVoiture(v: Voiture) {
    v.like = 0;
    return this.http.post(this.url, v);
  }

  searchVoiture(id) {
    return this.http.get(this.url + id);
  }

  putVoiture(v: Voiture) {
    return this.http.put(this.url, v);
  }
  submit(form){
    this.addVoiture(form).subscribe(() => {
      console.log('voiture added succesfully');

    });
  }
  updateVoiture( id: any , data: any){
    return this.http.put<Voiture[]>(this.url + id, data);
  }
  getVoitureById(id: number){
    return this.http.get<Voiture[]>(this.url + id);
  }
}
