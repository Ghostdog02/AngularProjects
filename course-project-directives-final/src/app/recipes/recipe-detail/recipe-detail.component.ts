import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { PassIngredientsService } from '../../shared/pass-ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private passIngredients: PassIngredientsService) { }

  ngOnInit() {
  }

  onToShoppingListClicked(currentRecipe: Recipe) {
    this.passIngredients.ingredientsSent.emit(this.recipe.ingredients);
  }
}
