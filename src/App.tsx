import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import UserForm from './pages/UserForm';
import FormDataInt from './interface/form';
// import DefaultFormDataInt from './interface/formData';

import CountCalories from './functions/countCalories';
import { UseMealData } from './functions/useMealData';

export interface menu {
  breakfast: {};
  snack?: {};
  lunch: {};
  snack2?: {};
  dinner: {};
}

function App() {
  const navigate = useNavigate();
  const [calories, setCalories] = useState<number>();
  const [formData, setFormData] = useState<FormDataInt>();

  // async function getMeals(formData: any) {
  //   console.log('getMeals');
  //   Promise.all([
  //     GetMeal(formData.diet, 'breakfast'),
  //     GetMeal(formData.diet, 'lunch'),
  //     GetMeal(formData.diet, 'lunch'),
  //   ]).then((values) => {
  //     values.forEach((elm) => console.log(elm));
  //     const bf = values.filter((elm) => elm.type === 'breakfast');
  //     setCookie('breakfast', bf[0]);
  //     const l = values.filter((elm) => elm.type !== 'breakfast');
  //     setCookie('lunch', l[0]);
  //     setCookie('dinner', l[1]);
  //     navigate('/menu');
  //   });
  // }

  const data = UseMealData(formData);

  function handleFormChange(formData: any) {
    // console.log(formData);
    setFormData(formData);
    setCalories(CountCalories(formData));
    navigate('/menu');
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={
          <Menu
            menu={data}
            goal={formData?.goal}
            calories={calories}
            diet={formData?.diet}
          />
        }
      />
      <Route
        path="/form"
        element={
          <UserForm
            sendformToParent={(e: any) => {
              handleFormChange(e);
            }}
          />
        }
      />
    </Routes>
  );
}

export default App;
