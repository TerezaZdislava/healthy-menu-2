export interface Ingredient {
  name: string;
  grams: number;
}

export interface meal {
  name: string;
  type: string;
  difficulty: string;
  preparationTime: number;
  cookingTime: number;
  image: string;
  steps: string;
  vegetarian: false;
  vegan: boolean;
  milkfree: boolean;
  glutenfree: boolean;
  calories: number;
  ingredients: Ingredient[];
}

export default meal;
