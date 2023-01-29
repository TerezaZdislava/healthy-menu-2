export type DietTypes =
  | 'vegan'
  | 'vegetarian'
  | 'lactoseFree'
  | 'glutenFree'
  | null;

export interface FormDataInt {
  gender: string;
  weight: number;
  goal: string;
  numberOfMeals: number;
  snack: boolean;
  sportFrequency: string;
  jobActivity: string;
  bodyFat: number;
  diet: DietTypes;
}

export default FormDataInt;
