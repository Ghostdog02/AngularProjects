import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  // @Output() recipeSelected = new EventEmitter<Recipe>()
  // constructor() { }

  // onSelected(currentName, currentDescription, currentImagePath) {
  //   this.recipeSelected.emit({
  //     name: currentName,
  //     description: currentDescription,
  //     imagePath: currentImagePath
  //   });

  // }
  @Output() recipeSelected = new EventEmitter<void>()
  constructor() { }

  onSelected() {
    this.recipeSelected.emit();
  }
  ngOnInit() {
  }

}
