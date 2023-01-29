import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormDataInt from '../../interface/form';
import { FormQuestionObj } from '../../interface/question';

function Diet({
  formData,
  setFormData,
  formquestions,
}: {
  formData: FormDataInt;
  setFormData: any;
  formquestions: FormQuestionObj[];
}) {
  const numberOfMealsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      numberOfMeals: parseInt((event.target as HTMLInputElement).value),
    });
  };

  const dietChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      diet: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <form className="formPart">
      <section className="question">
        <h4>{formquestions[0].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.diet}
          value={formData.diet}
          onChange={dietChange}
        >
          <FormControlLabel
            value={'vegan'}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[0]}
          />
          <FormControlLabel
            value={'vegetarian'}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[1]}
          />
          <FormControlLabel
            value={'lactoseFree'}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[2]}
          />
          <FormControlLabel
            value={'glutenFree'}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[3]}
          />
        </RadioGroup>
      </section>
      <section className="question">
        <h4>{formquestions[1].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.numberOfMeals}
          value={formData.numberOfMeals}
          onChange={numberOfMealsChange}
        >
          <FormControlLabel
            value={3}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[0]}
          />
          <FormControlLabel
            value={5}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[1]}
          />
        </RadioGroup>
      </section>
    </form>
  );
}
export default Diet;
