import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import UserForm from './pages/UserForm';
import db from './firebase';
import FormDataInt, { DietTypes } from './interface/form';
import DefaultFormDataInt from './interface/formData';
import {
  collection,
  query,
  where,
  getDocs,
  getCountFromServer,
} from 'firebase/firestore';
import formResponses from './data/form.json';

function App() {
  const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState<any>();
  const [lunch, setLunch] = useState<any>();
  const [dinner, setDinner] = useState<any>();
  const [calories, setCalories] = useState<number>();
  const [formData, setFormData] = useState<FormDataInt>(DefaultFormDataInt);

  // ---- adding docs to firestore ----
  // try {
  // const docRef = setDoc(doc(db, 'lunch', '1'), {});
  //   console.log('Document written with ID: ', docRef);
  // } catch (e) {
  //   console.error('Error adding document: ', e);
  // }
  //-----------------------------------------

  //---count calories per day---------------

  function mapGenderValues(gender) {
    switch (gender) {
      case formResponses[0].a[0]:
        return 1.1;
      case formResponses[0].a[1]:
        return 0.8;
      case formResponses[0].a[2]:
        return 1;
    }
  }

  function mapGoalValues(goal) {
    switch (goal) {
      case formResponses[1].a[0]:
        return 0.8;
      case formResponses[1].a[1]:
        return 1;
      case formResponses[1].a[2]:
        return 1.1;
    }
  }

  function mapSportFrequency(frequency) {
    switch (frequency) {
      case formResponses[5].a[0]:
        return 0.9;
      case formResponses[5].a[1]:
        return 1;
      case formResponses[5].a[2]:
        return 1.1;
      case formResponses[5].a[3]:
        return 1.2;
    }
  }

  function mapJobActivity(activity) {
    switch (activity) {
      case formResponses[6].a[0]:
        return 0.9;
      case formResponses[6].a[1]:
        return 1;
      case formResponses[6].a[2]:
        return 1.1;
    }
  }

  function countCalories(formdata: FormDataInt) {
    const gender = mapGenderValues(formdata.gender);
    const goal = mapGoalValues(formdata.goal);
    const sportFrequency = mapSportFrequency(formdata.sportFrequency);
    const jobActivity = mapJobActivity(formdata.jobActivity);
    const result =
      (((formdata.weight - (formdata.bodyFat / 100) * formdata.weight) * 21.6 +
        370) *
        ((goal + gender + sportFrequency + jobActivity) / 4)) /
      1789;
    setCalories(Math.round(2200 * result));
  }

  async function getLunchAndDinner(diet: DietTypes) {
    // console.log('formData.diet ' + diet);
    const lunchDB = collection(db, 'lunch');
    const lunchquery = query(
      lunchDB,
      diet !== null ? where(diet, '==', true) : null,
    );
    const collectionSize = await getCountFromServer(lunchquery);
    const dinnerindex: number = Math.round(
      Math.random() * collectionSize.data().count,
    );
    const lunchindex: number = Math.round(
      Math.random() * collectionSize.data().count,
    );
    const lunchDoc = await getDocs(lunchquery);
    let meals = [];
    lunchDoc.forEach((doc) => {
      meals.push(doc.data());
    });
    // console.log(meals);
    setLunch(meals[lunchindex - 1]);
    setDinner(meals[dinnerindex - 1]);
  }

  async function getBreakfast(diet: DietTypes) {
    const breakfastDB = collection(db, 'breakfast');
    const breakfastquery = query(
      breakfastDB,
      diet !== null ? where(diet, '==', true) : null,
    );
    const collectionSize = await getCountFromServer(breakfastquery);
    const index: number = Math.round(
      Math.random() * collectionSize.data().count,
    );
    const breakfastDoc = await getDocs(breakfastquery);
    console.log(index);
    let meals = [];
    breakfastDoc.forEach((doc) => {
      meals.push(doc.data());
    });
    setBreakfast(meals[index - 1]);
  }

  function handleFormChange(formData: any) {
    setFormData(formData);
    getLunchAndDinner(formData.diet);
    getBreakfast(formData.diet);
    countCalories(formData);
    navigate('/menu');
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={
          <Menu
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
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
  );
}

export default App;
