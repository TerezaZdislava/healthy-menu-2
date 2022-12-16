import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormDataInt from '../../interface/form';
import { FormQuestionObj } from '../../interface/question';

function Personal({
  formData,
  setFormData,
  formquestions,
}: {
  formData: FormDataInt;
  setFormData: any;
  formquestions: FormQuestionObj[];
}) {
  const handleWeightChange = (number: string) => {
    const weight = parseInt(number);
    setFormData({
      ...formData,
      weight: weight,
    });
  };

  const genderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      gender: (event.target as HTMLInputElement).value,
    });
  };

  const goalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      goal: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <form className="formPart">
      <section className="question">
        <h4>{formquestions[0].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.gender}
          value={formData.gender}
          onChange={genderChange}
        >
          <FormControlLabel
            value={formquestions[0].a[0]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[0]}
          />
          <FormControlLabel
            value={formquestions[0].a[1]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[1]}
          />
          <FormControlLabel
            value={formquestions[0].a[2]}
            control={<Radio color="secondary" />}
            label={formquestions[0].a[2]}
          />
        </RadioGroup>
      </section>
      <section className="question">
        <h4>{formquestions[1].q}</h4>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          defaultValue={formData.goal}
          value={formData.goal}
          onChange={goalChange}
        >
          <FormControlLabel
            value={formquestions[1].a[0]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[0]}
          />
          <FormControlLabel
            value={formquestions[1].a[1]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[1]}
          />
          <FormControlLabel
            value={formquestions[1].a[2]}
            control={<Radio color="secondary" />}
            label={formquestions[1].a[2]}
          />
        </RadioGroup>
      </section>
      <section className="question">
        <h4>{formquestions[2].q}</h4>
        <div>
          <input
            className="user-input"
            type="number"
            value={formData.weight}
            onChange={(e) => handleWeightChange(e.target.value)}
          />
        </div>
      </section>
    </form>
  );

  // return (
  //   <form className="formPart">
  //     <section className="question">
  //       <h4>{formquestions[0].q}</h4>
  //       <div>
  //         <div
  //           className="option"
  //           onClick={() =>
  //             setFormData({
  //               ...formData,
  //               gender: formquestions[0].a[0],
  //             })
  //           }
  //         >
  //           <input
  //             type="radio"
  //             value={formquestions[0].a[0]}
  //             id={formquestions[0].a[0]}
  //             checked={formData.gender === formquestions[0].a[0]}
  //             onChange={() =>
  //               setFormData({
  //                 ...formData,
  //                 gender: formquestions[0].a[0],
  //               })
  //             }
  //           />
  //           <label>{formquestions[0].a[0]}</label>
  //         </div>
  //         <div
  //           className="option"
  //           onClick={() =>
  //             setFormData({
  //               ...formData,
  //               gender: formquestions[0].a[1],
  //             })
  //           }
  //         >
  //           <input
  //             type="radio"
  //             value={formquestions[0].a[1]}
  //             id={formquestions[0].a[1]}
  //             checked={formData.gender === formquestions[0].a[1]}
  //             onChange={() =>
  //               setFormData({
  //                 ...formData,
  //                 gender: formquestions[0].a[1],
  //               })
  //             }
  //           />
  //           <label>{formquestions[0].a[1]}</label>
  //         </div>
  //         <div
  //           className="option"
  //           onClick={() =>
  //             setFormData({
  //               ...formData,
  //               gender: formquestions[0].a[2],
  //             })
  //           }
  //         >
  //           <input
  //             type="radio"
  //             name="gender"
  //             value={formquestions[0].a[2]}
  //             id={formquestions[0].a[2]}
  //             checked={formData.gender === formquestions[0].a[2]}
  //             onChange={() =>
  //               setFormData({
  //                 ...formData,
  //                 gender: formquestions[0].a[2],
  //               })
  //             }
  //           />
  //           <label>{formquestions[0].a[2]}</label>
  //         </div>
  //       </div>
  //     </section>
  //     <section className="question">
  //       <h4>{formquestions[1].q}</h4>
  //       <div className="App">
  //         <div className="option">
  //           <input
  //             type="radio"
  //             value={formquestions[1].a[0]}
  //             id={formquestions[1].a[0]}
  //             checked={formData.goal === formquestions[1].a[0]}
  //             onChange={() =>
  //               setFormData({
  //                 ...formData,
  //                 goal: formquestions[1].a[0],
  //               })
  //             }
  //           />
  //           <label htmlFor="regular">{formquestions[1].a[0]}</label>
  //         </div>
  //         <div className="option">
  //           <input
  //             type="radio"
  //             value={formquestions[1].a[1]}
  //             id={formquestions[1].a[1]}
  //             checked={formData.goal === formquestions[1].a[1]}
  //             onChange={() =>
  //               setFormData({
  //                 ...formData,
  //                 goal: formquestions[1].a[1],
  //               })
  //             }
  //           />
  //           <label htmlFor="regular">{formquestions[1].a[1]}</label>
  //         </div>
  //         <div className="option">
  //           <input
  //             type="radio"
  //             value={formquestions[1].a[2]}
  //             id={formquestions[1].a[2]}
  //             checked={formData.goal === formquestions[1].a[2]}
  //             onChange={() =>
  //               setFormData({
  //                 ...formData,
  //                 goal: formquestions[1].a[2],
  //               })
  //             }
  //           />
  //           <label htmlFor="regular">{formquestions[1].a[2]}</label>
  //         </div>
  //       </div>
  //     </section>
  //     <section className="question">
  //       <h4>{formquestions[2].q}</h4>
  //       <div className="App">
  //         <input
  //           className="user-input"
  //           type="number"
  //           value={formData.weight}
  //           onChange={(e) => handleWeightChange(e.target.value)}
  //         />
  //       </div>
  //     </section>
  //   </form>
  // );
}
export default Personal;
