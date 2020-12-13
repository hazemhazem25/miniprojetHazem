import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Voiture} from '../model/voiture';
import {VoitureService} from '../shared/voiture.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-voitures',
  templateUrl: './list-voitures.component.html',
  styleUrls: ['./list-voitures.component.css']
})
export class ListVoituresComponent implements OnInit {
  @Input() voiture: Voiture;
  @Output() notifLike = new EventEmitter<Voiture>();
  @Input() priceInput: number;
  @Input() nomInput: string;
  a = '';
  constructor(){
  }

  ngOnInit(): void {
  }
  sendNotif(){
    this.notifLike.emit(this.voiture);
    this.voiture.like++;
  }

  getColor(){
    if (this.voiture.quantity === 0){
      return 'red';
    }
  }

}
