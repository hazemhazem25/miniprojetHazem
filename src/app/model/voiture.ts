import {Categorie} from './categorie';

export class Voiture {
  id: string;
  nom: string;
  description: string;
  image: File;
  fileSource: string;
  prix: number;
  like: number;
  quantity: number;
  categorie: Categorie;
}
