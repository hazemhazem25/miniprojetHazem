import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {VoitureComponent} from './voiture/voiture.component';
import {CategorieComponent} from './categorie/categorie.component';
import {DetailVoitureComponent} from './detail-voiture/detail-voiture.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';


const ROUTES: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'connexion/Home', component: HomeComponent},
  {path: 'GererVoiture', component: VoitureComponent},
  {path: 'GererCategorie', component: CategorieComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'connexion/Home/detail/:id' , component: DetailVoitureComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
