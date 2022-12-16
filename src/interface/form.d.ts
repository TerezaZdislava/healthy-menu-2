export type DietTypes =
  | 'vegan'
  | 'vegetarian'
  | 'lactose free'
  | 'gluten free'
  | null;

export interface FormDataInt {
  gender: string;
  weight: number;
  goal: string;
  sportFrequency: string;
  jobActivity: string;
  bodyFat: number;
  diet: DietTypes;
}

export default FormDataInt;
