import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { PassIngredientsService } from '../shared/pass-ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService,
    private passIngredients: PassIngredientsService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService
      .ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

    this.passIngredients
      .ingredientsSent.subscribe(
        (ingredientsPassed: Ingredient[]) => {
          let ingredientsCount = ingredientsPassed.length;
          for (let currentIndex = 0; currentIndex < ingredientsCount;) {
            this.ingredients.push(ingredientsPassed[currentIndex]);
          }
        }
      )
  }

}
