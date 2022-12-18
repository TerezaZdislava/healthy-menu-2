import Card from '../components/card';
import '../styles/menu.scss';
// import TaskIcon from '@mui/icons-material/Task';
// import SvgIcon from '@mui/icons-material/Task';
import meal from '../interface/meal';
import Meal from '../components/meal';

function Menu({
  breakfast,
  lunch,
  dinner,
  goal,
  calories,
  diet,
}: {
  breakfast: meal;
  lunch: meal;
  dinner: meal;
  goal: string;
  diet: string;
  calories: number;
}) {
  return (
    <div className="menuComponent">
      <div className="menuContainer">
        <span>Your healthy</span>
        <h1>Daily menu</h1>
        <Card goal={goal} calories={calories} diet={diet} />
        <span>Breakfast</span>
        <Meal meal={breakfast} />
        <span>Lunch</span>
        <Meal meal={lunch} />
        <span>Dinner</span>
        <Meal meal={dinner} />
      </div>
    </div>
  );
}

export default Menu;
