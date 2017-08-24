import { Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import { Recipe} from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
	
	private recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test', 
			'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
			 [
			 	new Ingredient('Meat', 1),
			 	new Ingredient('leamon',2)
			 ]),
		
		new Recipe('Speghetti', 'This is a recipe', 
 			 'https://upload.wikimedia.org/wikipedia/commons/7/70/Spaghetti_alle_vongole.jpg',			 [
			 new Ingredient('Speghetti', 2),
			 	new Ingredient('Cilantro',1)

			 ])
		

    ];
    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
    	this.recipes = recipes;
    	this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
    	return this.recipes.slice();
    }
    getRecipe(index:number) {
    	return this.recipes[index];
    }

    AddIngredientsToShoppingList(ingredients: Ingredient[]) {
    	this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
    	this.recipes.push(recipe);
    	this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
    	this.recipes[index] =newRecipe;
    	this.recipesChanged.next(this.recipes.slice());
    	
    }

    deleteRecipe(index: number) {
    	this.recipes.splice(index, 1);
    	this.recipesChanged.next(this.recipes.slice());
    }

}