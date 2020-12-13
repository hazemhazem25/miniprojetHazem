import { Component, OnInit } from '@angular/core';
import {Voiture} from '../model/voiture';
import {ActivatedRoute} from '@angular/router';
import {VoitureService} from '../shared/voiture.service';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {
listVoiture: Voiture;
 voiture: any = [];
  constructor(private route: ActivatedRoute , private service: VoitureService  ) { }

  ngOnInit(): void {
    this.service.getVoitureById(this.route.snapshot.params.id).subscribe(s => this.voiture = s);
  }

}
