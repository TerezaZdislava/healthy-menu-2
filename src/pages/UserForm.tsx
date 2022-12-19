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

function UserForm({ sendformToParent }: { sendformToParent: Function }) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState(false);
  const [formData, setFormData] = useState<FormDataInt>(DefaultFormDataInt);

  function validate() {
    switch (step) {
      case 0:
        if (
          formData.gender !== '' &&
          formData.goal !== '' &&
          formData.weight !== 0
        ) {
          return true;
        }
        return false;
      case 1:
        return true;
      case 2:
        if (formData.sportFrequency !== '' && formData.jobActivity !== '') {
          return true;
        }
        return false;
      case 3:
        return true;
    }
  }

  const view = () => {
    switch (step) {
      case 0:
        return (
          <Personal
            errors={errors}
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
            errors={errors}
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
    if (validate()) {
      setErrors(false);
      setStep(step + 1);
    } else {
      setErrors(true);
    }
    if (step === 3) {
      sendformToParent(formData);
    }
  }

  function handleBack() {
    setStep(step - 1);
    setErrors(false);
  }

  return (
    <div className="formContainer">
      <StepperWrapper step={step + 1} />
      {view()}
      <div className="buttons">
        {step > 0 && (
          <button className="button-secondary back" onClick={handleBack}>
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
