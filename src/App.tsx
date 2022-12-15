import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import UserForm from './pages/UserForm';
import {
  ref,
  // child,
  get,
  query,
  // limitToLast,
  // onValue,
  orderByChild,
  equalTo,
  limitToFirst,
} from 'firebase/database';
import db from './firebase';
export type DietTypes =
  | 'vegan'
  | 'vegetarian'
  | 'lactose free'
  | 'gluten free'
  | null;

export interface FormDataInt {
  gender: string;
  weight: number;
  goal: string;
  // numberOfMeals: number;
  sportFrequency: string;
  jobActivity: string;
  bodyFat: number;
  diet: DietTypes;
}

function App() {
  const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [formData, setFormData] = useState<FormDataInt>({
    gender: '',
    weight: 70,
    goal: '',
    // numberOfMeals: 3,
    sportFrequency: '',
    jobActivity: '',
    bodyFat: 3,
    diet: null,
  });

  function getMeals(diet: string) {
    const dbRefBreakfast = ref(db, 'meals/breakfast');
    const dbRefLunch = ref(db, 'meals/lunch and dinner');
    const meatConstraints = [
      orderByChild('milk free'),
      equalTo(true),
      limitToFirst(1),
    ];
    get(query(dbRefBreakfast, ...meatConstraints)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setBreakfast(snapshot.val());
      } else {
        console.log('err');
        console.log(formData);
      }
    });
    get(query(dbRefLunch, ...meatConstraints)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        setLunch(snapshot.val());
      } else {
        console.log('err');
      }
    });
    navigate('/menu');
    // console.log('recentPostsRef ' + recentPostsRef);
  }

  function handleFormChange(formData: any) {
    console.log(formData);
    setFormData(formData);
    getMeals(formData.diet);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={<Menu breakfast={breakfast[1]} lunch={lunch[1]} />}
      />
      <Route
        path="/form"
        element={
          <UserForm sendformToParent={(e: any) => handleFormChange(e)} />
        }
      />
    </Routes>
  );
}

export default App;
