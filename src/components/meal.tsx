import { Ingredient, meal } from '../interface/meal';
import TaskIcon from '@mui/icons-material/Task';
import SvgIcon from '@mui/icons-material/Task';
import '../styles/menu.scss';

function Meal({ meal }: { meal: any }) {
  return (
    <>
      <h5 className="headline">{meal?.name}</h5>
      <div className="meal">
        <section className="left">
          <div className="info">
            <div className="icon-background">
              <SvgIcon component={TaskIcon} />
            </div>
            <div className="text">
              <span>Difficulty</span>
              <h4>Easy</h4>
            </div>
            <div className="text">
              <span>Preparation</span>
              <h4>15 min</h4>
            </div>
            <div className="text">
              <span>Cooking</span>
              <h4>0 min</h4>
            </div>
            <div className="text">
              <span>Total</span>
              <h4>15 min</h4>
            </div>
          </div>
          <div className="ingredients">
            <h2>Ingredients</h2>
            {meal?.ingredients?.map(function (elm: Ingredient, i: number) {
              return (
                <div className="ingredient" key={i}>
                  <h4>{elm.grams} g</h4>
                  <span>{elm.name}</span>
                </div>
              );
            })}
          </div>
        </section>
        <section className="right">
          <img src={meal?.image} alt={meal?.image} />
          <h2>Instructions</h2>
          <p>{meal?.steps}</p>
        </section>
      </div>
    </>
  );
}

export default Meal;
