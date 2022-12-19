import FormDataInt from '../interface/form';
import mapFormResults from './mapFormResults';

function CountCalories(formdata: FormDataInt) {
  const gender = mapFormResults('gender', formdata.gender);
  const goal = mapFormResults('goal', formdata.goal);
  const sportFrequency = mapFormResults('frequency', formdata.sportFrequency);
  const jobActivity = mapFormResults('activity', formdata.jobActivity);

  const result =
    (((formdata.weight - (formdata.bodyFat / 100) * formdata.weight) * 21.6 +
      370) *
      ((goal + gender + sportFrequency + jobActivity) / 4)) /
    1789;

  return Math.round(2200 * result);
}

export default CountCalories;
