import '../../styles/components/stepper.scss';

function StepperWrapper({ step }: { step: number }) {
  return (
    <div className="stepper-wrapper">
      <div
        className={`${'stepper-item'} ${step > 1 ? 'completed' : ''} ${
          step === 1 ? 'active' : ''
        }`}
      >
        <div className="step-counter">1</div>
      </div>
      <div
        className={`${'stepper-item'} ${step > 2 ? 'completed' : ''} ${
          step === 2 ? 'active' : ''
        }`}
      >
        <div className="step-counter">2</div>
      </div>
      <div
        className={`${'stepper-item'} ${step > 3 ? 'completed' : ''} ${
          step === 3 ? 'active' : ''
        }`}
      >
        <div className="step-counter">3</div>
      </div>
      <div
        className={`${'stepper-item'} ${step > 4 ? 'completed' : ''} ${
          step === 4 ? 'active' : ''
        }`}
      >
        <div className="step-counter">4</div>
      </div>
    </div>
  );
}

export default StepperWrapper;
