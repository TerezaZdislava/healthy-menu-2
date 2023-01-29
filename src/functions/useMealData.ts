import { useState, useEffect } from 'react';

export function UseMealData(form) {
  const http = 'http://localhost:5000/record';
  const [data, setData] = useState();

  useEffect(() => {
    if (!form) return;
    async function getRecords() {
      const response = await fetch(
        `${http}?numberOfMeals=${form.numberOfMeals}&diet=${form.diet}`,
      );
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const newData = await response.json();
      setData(newData);
      console.log();
      return newData;
    }
    getRecords();
  }, [form]);
  return data;
}
