import {
  collection,
  getCountFromServer,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import db from '../firebase';
import { DietTypes } from '../interface/form';
// import { useCookies } from 'react-cookie';

async function GetMeal(diet: DietTypes, type: 'breakfast' | 'lunch') {
  // const [cookie, setCookie] = useCookies(['breakfast', 'lunch', 'dinner']);

  function getRandomIndex(collectionSize: number) {
    console.log(collectionSize);
    return Math.round(Math.random() * (collectionSize - 1));
  }

  const mealDB = collection(db, type);
  const mealQuery = query(
    mealDB,
    diet !== null ? where(diet, '==', true) : null,
  );
  const collectionSize = await getCountFromServer(mealQuery);
  const index = getRandomIndex(collectionSize.data().count);
  console.log(index);
  const dinnerDoc = await getDocs(mealQuery);
  let meals = [];
  dinnerDoc.forEach((doc) => {
    console.log('generate ' + type);
    meals.push(doc.data());
  });
  console.log(type + meals[index]);
  console.log('meals' + meals.length + index);
  // setCookie(type, meals[index]);
  return meals[index];
}

export default GetMeal;
