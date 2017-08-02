import { EventEmitter, Injectable} from '@angular/core';

import { Recipe} from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 
			'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
			 [
			 	new Ingredient('Meat', 1),
			 	new Ingredient('leamon',2)
			 ]),
		new Recipe('Recipe Test', 'This is a test', 
			'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg', 
			 [
			 new Ingredient('Meat', 1),
			 	new Ingredient('leamon',2)

			 ])

    ];
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
    	return this.recipes.slice();
    }
    getRecipe(index:number) {
    	return this.recipes.slice()[index];
    }

    AddIngredientsToShoppingList(ingredients: Ingredient[]) {
    	this.slService.addIngredients(ingredients);
    }

}