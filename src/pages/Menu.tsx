import Card from '../components/card';
import '../styles/menu.scss';
// import TaskIcon from '@mui/icons-material/Task';
// import SvgIcon from '@mui/icons-material/Task';
import meal from '../interface/meal';
import Meal from '../components/meal';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  function modifyDietNames(diet: string | null) {
    switch (diet) {
      case 'vegan':
        return 'Vegan';
      case 'vegetarian':
        return 'Vegetarian';
      case 'lactoseFree':
        return 'Lactose free';
      case 'glutenFree':
        return 'Gluten free';
    }
  }
  return (
    <div className="menuComponent">
      {lunch && dinner && breakfast ? (
        <div className="menuContainer">
          <span>Your healthy</span>
          <h1>Daily menu</h1>
          <Card
            goal={goal}
            calories={calories}
            diet={diet ? modifyDietNames(diet) : 'No dietary restrictions'}
          />
          <span>Breakfast</span>
          {<Meal meal={breakfast} />}
          <span>Lunch</span>
          {<Meal meal={lunch} />}
          <span>Dinner</span>
          {<Meal meal={dinner} />}
        </div>
      ) : (
        <div className="noData">
          <h1>Looking for a healthy menu?</h1>
          <h4>Fill a short form and get your menu in few minutes!</h4>
          <div className="buttons">
            <button className="button-secondary" onClick={() => navigate('/')}>
              Homepage
            </button>
            <button
              className="button-primary"
              onClick={() => navigate('/form')}
            >
              Get menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
