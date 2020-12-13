import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoitureComponent } from './voiture/voiture.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSrcModule} from 'ng-src';
import { ListVoituresComponent } from './list-voitures/list-voitures.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CategorieComponent } from './categorie/categorie.component';
import { DetailVoitureComponent } from './detail-voiture/detail-voiture.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    ListVoituresComponent,
    HomeComponent,
    CategorieComponent,
    DetailVoitureComponent,
    InscriptionComponent,
    ConnexionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgSrcModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
