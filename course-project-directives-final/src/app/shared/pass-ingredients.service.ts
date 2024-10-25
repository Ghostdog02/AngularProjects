import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "./ingredient.model";

export class PassIngredientsService {
    ingredientsSent = new EventEmitter<Ingredient[]>();
}