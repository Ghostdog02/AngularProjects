import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 
    'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
    new Recipe('A Test Recipe1', 'This is simply a test1', 
    'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg')
  ];   
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
