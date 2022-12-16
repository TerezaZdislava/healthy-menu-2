import { FormQuestionObj } from '../../interface/question';
export interface propsType {
  questionArray: Array<FormQuestionObj>;
  questionType: 'checkbox' | 'radio' | 'slider';
}

function SwipableView(props: propsType) {
  return (
    <div>
      {props.questionArray.map(function (questionBlock, i) {
        return (
          <div key={i}>
            <span>{questionBlock.q}</span>
            {questionBlock.a !== null &&
              questionBlock.a.map(function (answer, i) {
                if (props.questionType === 'checkbox') {
                  return (
                    <div key={i}>
                      <span>{answer}</span>
                      <input type="checkbox" />
                    </div>
                  );
                }
                if (props.questionType === 'radio') {
                  return (
                    <div key={i}>
                      <span>{answer}</span>
                      <input type="radio" value={answer} />
                    </div>
                  );
                } else {
                  return (
                    <label key={i}>
                      <span>{answer}</span>
                      <input type="checkbox" />
                    </label>
                  );
                }
              })}
          </div>
        );
      })}
    </div>
  );
}

export default SwipableView;
