import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
