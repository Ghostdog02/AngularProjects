import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  // @Output() ingredientCreated: Ingredient;
  // timer;

  onAddClicked() {
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  // ngAfterContentInit(): void {
  //   this.ingredientCreated.emit({
  //     name: this.ingredientName.nativeElement.value,
  //     amount: this.ingredientAmount.nativeElement.value
  //   });

  // }
  // constructor() {
  //   this.timer = setInterval(() => {
  //     if (this.isIngredientCreated()) {
  //       this.ingredientCreated.emit({
  //         name: this.ingredientName.nativeElement.value,
  //         amount: this.ingredientAmount.nativeElement.value
  //       });
  //       this.timer.clearInterval();
  //     }
  //   }
  //     , 1000);

  // }

  // isIngredientCreated() {
  //   if (this.ingredientName.nativeElement.value != undefined &&
  //     this.ingredientAmount.nativeElement.value != undefined) {
  //     return true;
  //   }

  // }

  ngOnInit() {

  }

}
