import { Specs } from './specs';

export interface DetailedCard {
  id: number;
  curatedName: string;
  description: string;
  model: string;
  imageCatalogUrl: string;
  imageCatalogHoverUrl: string;
  imageDetailsUrl: string[];
  priceInEur: number;
  specs: Specs;
}
