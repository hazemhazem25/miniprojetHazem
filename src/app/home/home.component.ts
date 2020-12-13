import { Component, OnInit } from '@angular/core';
import {Voiture} from '../model/voiture';
import {VoitureService} from '../shared/voiture.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  listVoiture: Observable<Voiture[]>;
  private i: number;
  priceMax: number;
  nom: string;
  p = 1;
  constructor(private serviceVoiture: VoitureService) { }

  ngOnInit(): void {
    this.title = 'E-Commerce';
    this.listVoiture = this.serviceVoiture.getVoitures();
  }
  incrementLike(voiture: Voiture){
    let i = this.i++;
    this.listVoiture[i].like++;
  }

}
