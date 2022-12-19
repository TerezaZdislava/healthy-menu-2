import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import UserForm from './pages/UserForm';
import FormDataInt from './interface/form';
import DefaultFormDataInt from './interface/formData';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';

import CountCalories from './functions/countCalories';
import GetMeal from './functions/getMeal';

function App() {
  const navigate = useNavigate();
  const [calories, setCalories] = useState<number>();
  const [formData, setFormData] = useState<FormDataInt>(DefaultFormDataInt);
  const [cookie, setCookie] = useCookies(['breakfast', 'lunch', 'dinner']);

  //all cookies
  console.log('lunch' + JSON.stringify(cookie.lunch));
  console.log('breakfast' + JSON.stringify(cookie.breakfast));
  console.log('dinner' + JSON.stringify(cookie.dinner));

  // ---- adding docs to firestore ----
  // try {
  // const docRef = setDoc(doc(db, 'lunch', '1'), {});
  //   console.log('Document written with ID: ', docRef);
  // } catch (e) {
  //   console.error('Error adding document: ', e);
  // }

  async function getMeals(formData: any) {
    console.log('getMeals');
    Promise.all([
      GetMeal(formData.diet, 'breakfast'),
      GetMeal(formData.diet, 'lunch'),
      GetMeal(formData.diet, 'lunch'),
    ]).then((values) => {
      values.forEach((elm) => console.log(elm));
      const bf = values.filter((elm) => elm.type === 'breakfast');
      setCookie('breakfast', bf[0]);
      const l = values.filter((elm) => elm.type !== 'breakfast');
      setCookie('lunch', l[0]);
      setCookie('dinner', l[1]);
      navigate('/menu');
    });
  }

  function handleFormChange(formData: any) {
    setFormData(formData);
    getMeals(formData);
    setCalories(CountCalories(formData));
  }

  // function deleteCookies() {
  //   console.log('deleteCookies');
  // removeCookie('lunch');
  // removeCookie('breakfast');
  // removeCookie('dinner');
  // }

  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Menu
              breakfast={cookie.breakfast}
              lunch={cookie.lunch}
              dinner={cookie.dinner}
              goal={formData.goal}
              calories={calories}
              diet={formData.diet}
            />
          }
        />
        <Route
          path="/form"
          element={
            <UserForm sendformToParent={(e: any) => handleFormChange(e)} />
          }
        />
      </Routes>
    </CookiesProvider>
  );
}

export default App;
