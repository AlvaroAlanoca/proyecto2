import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  title: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products: Product[] = [
    {
      name: 'Caja con promo',
      title: 'Cynthia Premiun Box',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/cynthias-garchomp-ex-premium-collection/cynthias-garchomp-ex-premium-collection-169-en.png'
    },
    {
      name: 'Caja con promo',
      title: 'Iono Premiun Box',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/ionos-bellibolt-ex-premium-collection/ionos-bellibolt-ex-premium-collection-169-en.png'
    },
    {
      name: 'Caja con promos',
      title: 'Team Rocket Premiun Box',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/team-rockets-mewtwo-ex-box/team-rockets-mewtwo-ex-box-169-us.png'
    },
    {
      name: 'Cartas jumbo',
      title: 'Hoenn Collection ',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/hoenn-collection/hoenn-collection-box-169.jpg'
    },
    {
      name: 'Caja con 9 sobres',
      title: 'ETB Team Rocket',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/sv10-pokemon-center-elite-trainer-box/sv10-pokemon-center-elite-trainer-box-169-en.png'
    },
    {
      name: 'Caja promo y sobres',
      title: 'Lillie Collection Box',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/lillie-premium-tournament-collection/lillie-premium-tournament-collection-169-en.png'
    },
    {
      name: 'Caja con 9 sobres',
      title: 'ETB Journey Together',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/sv09-elite-trainer-box/sv09-elite-trainer-box-169-en.png'
    },
    {
      name: 'Caja con 9 sobres',
      title: 'ETB Prismatic Evolutions',
      image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/trading-card-game/series/incrementals/2025/sv8pt5-elite-trainer-box/sv8pt5-elite-trainer-box-169-en.png'
    }
    
    
  ];
  constructor() { }
   getProducts(): Product[] {
    return this.products;
  }
}
