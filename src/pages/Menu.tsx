import Card from '../components/card';
import '../styles/menu.scss';
// import TaskIcon from '@mui/icons-material/Task';
// import SvgIcon from '@mui/icons-material/Task';
// import meal from '../interface/meal';
import Meal from '../components/meal';
import { useNavigate } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

export interface menu {
  breakfast: {};
  snack?: {};
  lunch: {};
  snack2?: {};
  dinner: {};
}

function Menu({
  menu,
  goal,
  calories,
  diet,
}: {
  menu: menu;
  goal: string;
  diet: string;
  calories: number;
}) {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const [result, setResult] = useState([]);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
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
  // console.log('Menu se nacetlo');

  // let result = [];

  function getCount(elm: any) {
    let count;
    if (Object.keys(elm).includes('gramsPerPiece')) {
      count = elm.grams / elm.gramsPerPiece;
    } else {
      count = elm.grams;
    }
    if (count < 1) {
      count = 1;
    }
    // console.log(Math.ceil(count));
    return Math.ceil(count);
  }

  function getids() {
    let result = [];
    let namesArray = [];

    //creat set of names
    Object.values(menu).forEach((meal) => {
      meal.ingredients.forEach((elm: any) => {
        namesArray.push(elm.name);
      });
    });
    namesArray.sort();
    const nameList = new Set(namesArray);

    //create result
    nameList.forEach((name: string) => {
      let newElm = {
        name: name,
        count: 0,
        metric: '',
      };
      Object.values(menu).forEach((meal) => {
        meal.ingredients.forEach((elm: any) => {
          if (elm.name === name) {
            newElm.metric = elm.unit;
            newElm.count = newElm.count + getCount(elm);
          }
        });
      });
      result.push(newElm);
    });
    // console.log(result);
    setResult(result);
  }

  return (
    <div className="menuComponent">
      {menu ? (
        <div className="menuContainer">
          <span>Your healthy</span>
          <h1>Daily menu</h1>
          <Card
            goal={goal}
            calories={calories}
            diet={diet ? modifyDietNames(diet) : 'No dietary restrictions'}
          />
          <Box>
            <Tabs
              value={tabIndex}
              style={{ marginBottom: '30px' }}
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#14274d',
                  height: '5px',
                  borderRadius: '3px',
                },
                '& .MuiTab-root': {
                  color: '#1a1a1a',
                  fontFamily: 'Fira-sans, sans-serif',
                  textTransform: 'capitalize',
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
                '& .Mui-selected': { color: '#14274d' },
              }}
            >
              <Tab label="Menu" />
              <Tab label="Shopping list" onClick={() => getids()} />
            </Tabs>
          </Box>
          {tabIndex === 0 && (
            <>
              <span>Breakfast</span>
              {<Meal meal={menu.breakfast} />}
              {menu.snack ? (
                <>
                  <span>Snack</span>
                  {<Meal meal={menu.snack} />}
                </>
              ) : null}
              <span>Lunch</span>
              {<Meal meal={menu.lunch} />}
              {menu.snack2 ? (
                <>
                  <span>Snack</span>
                  {<Meal meal={menu.snack2} />}
                </>
              ) : null}
              <span>Dinner</span>
              {<Meal meal={menu.dinner} />}
            </>
          )}
          {tabIndex === 1 && (
            <>
              <div className="shopping-list">
                {result.map(function (elm: any, i: number) {
                  return (
                    <div className="ingredient" key={i}>
                      <span style={{ marginRight: '10px' }}>{elm.name}</span>
                      <span>
                        {elm.count} {elm.metric}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
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
