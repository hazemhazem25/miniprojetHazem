import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = 'http://localhost:3000/Categories/';
  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get<Categorie[]>(this.url);
  }

  deleteCategorie(id) {
    return this.http.delete(this.url + id);
  }

  addCategorie(c: Categorie) {
    return this.http.post(this.url, c);
  }

  searchCategorie(id) {
    return this.http.get(this.url + id);
  }

  putCategorie(c: Categorie) {
    return this.http.put(this.url + c.id, c);
  }
}

