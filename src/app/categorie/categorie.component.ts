import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../shared/categorie.service';
import {Categorie} from '../model/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  listCategorie: Categorie[];
  categorie: Categorie;
  isEdit = false;
  p = 1;
  constructor(private service: CategorieService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(
      (data: Categorie[]) => this.listCategorie = data
    );

    this.categorie = new Categorie();

  }

  deleteE(id) {
    this.service.deleteCategorie(id).subscribe(
      () => this.listCategorie = this.listCategorie.filter(categorie => categorie.id !== id)
    );

  }

  save() {
      this.service.addCategorie(this.categorie).subscribe(
        () => this.listCategorie = [this.categorie, ...this.listCategorie]
      );
  }
  updatepremiereetape(c ){
    this.categorie = c;
    this.isEdit = true;
  }
  updatedeuxiemeetape(){
    this.isEdit = !this.isEdit;
    this.service.putCategorie(this.categorie).subscribe(
      () => this.listCategorie = [ ...this.listCategorie]
    );
  }

}
