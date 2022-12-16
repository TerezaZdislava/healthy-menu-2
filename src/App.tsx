import { useState } from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import UserForm from './pages/UserForm';
import db from './firebase';
import FormDataInt from './interface/form';
import DefaultFormDataInt from './interface/formData';
import { collection, query, where, limit, getDocs } from 'firebase/firestore';

function App() {
  const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState<any>();
  const [lunch, setLunch] = useState<any>();
  const [dinner, setDinner] = useState<any>();
  const [formData, setFormData] = useState<FormDataInt>(DefaultFormDataInt);

  // function getMeals(diet: string) {
  //   const dbRefBreakfast = ref(db, 'meals/breakfast');
  //   const dbRefLunch = ref(db, 'meals/lunch and dinner');
  //   const meatConstraints = [
  //     limitToFirst(1),
  //     orderByChild('milk free'),
  //     equalTo(true),
  //     // limitToFirst(1),
  //   ];
  //   get(query(dbRefBreakfast, ...meatConstraints)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //       setBreakfast(snapshot.val());
  //     } else {
  //       console.log('err');
  //       console.log(formData);
  //     }
  //   });
  //   get(query(dbRefLunch, ...meatConstraints)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //       setLunch(snapshot.val());
  //     } else {
  //       console.log('err');
  //     }
  //   });
  //   navigate('/menu');
  //   // console.log('recentPostsRef ' + recentPostsRef);
  // }

  // try {
  // const docRef = addDoc(collection(db, 'lunch', '1'), {
  // const docRef = db.collection('lunch').doc('0')
  // const docRef = setDoc(doc(db, 'lunch', '1'), {});
  //   console.log('Document written with ID: ', docRef);
  // } catch (e) {
  //   console.error('Error adding document: ', e);
  // }

  // Breakfast {
  // const breakfastDB = collection(db, 'breakfast');
  // const q = query(breakfastDB, where('lactoseFree', '==', true), limit(2));
  // async function getBreakfast() {
  //   const newDoc = await getDocs(q);
  //   newDoc.forEach((doc) => {
  //     console.log(doc.id, ' => ', doc.data());
  //   });
  //   navigate('/menu');
  // }

  const lunchDB = collection(db, 'lunch');
  const breakfastDB = collection(db, 'breakfast');
  const lunchquery = query(lunchDB, where('lactoseFree', '==', true), limit(2));
  const breakfastquery = query(
    breakfastDB,
    where('lactoseFree', '==', true),
    limit(1),
  );
  async function getMeal() {
    const lunchDoc = await getDocs(lunchquery);
    let arr = [];
    lunchDoc.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      // let data: meal = doc.data()
      arr.push(doc.data());
    });
    setLunch(arr[0]);
    setDinner(arr[1]);
    const breakfastDoc = await getDocs(breakfastquery);
    breakfastDoc.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      // let data: meal = doc.data()
      setBreakfast(doc.data());
    });
    navigate('/menu');
  }

  function handleFormChange(formData: any) {
    console.log(formData);
    setFormData(formData);
    getMeal();
  }
  console.log(formData);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/menu"
        element={<Menu breakfast={breakfast} lunch={lunch} dinner={dinner} />}
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
