import { useState } from 'react';
import Activity from '../components/form/Activity';
import BodyFat from '../components/form/BodyFat';
import Diets from '../components/form/Diets';
import Personal from '../components/form/Personal';
import StepperWrapper from '../components/form/StepperWrapper';
import formquestions from '../data/form.json';
import FormDataInt from '../interface/form';
import DefaultFormDataInt from '../interface/formData';
import '../styles/form.scss';

function UserForm(props: any) {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<FormDataInt>(DefaultFormDataInt);

  const view = () => {
    switch (step) {
      case 0:
        return (
          <Personal
            formData={formData}
            setFormData={setFormData}
            formquestions={[
              formquestions[0],
              formquestions[1],
              formquestions[2],
            ]}
          />
        );
      case 1:
        return (
          <Diets
            formData={formData}
            setFormData={setFormData}
            formquestions={[formquestions[3], formquestions[4]]}
          />
        );
      case 2:
        return (
          <Activity
            formData={formData}
            setFormData={setFormData}
            formquestions={[formquestions[5], formquestions[6]]}
          />
        );
      default:
        return (
          <BodyFat
            formData={formData}
            setFormData={setFormData}
            formquestions={formquestions[7]}
          />
        );
    }
  };

  function handleSubmit() {
    setStep(step + 1);
    console.log(formData);
    if (step === 3) {
      props.sendformToParent(formData);
    }
  }

  return (
    <div className="formContainer">
      {/* <div className="background"></div> */}
      <StepperWrapper step={step + 1} />
      {view()}
      <div className="buttons">
        {step > 0 && (
          <button
            className="button-secondary back"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        <button className="button-primary" onClick={handleSubmit}>
          {step < 3 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default UserForm;
