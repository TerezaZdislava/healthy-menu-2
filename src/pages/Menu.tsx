import '../styles/menu.scss';

export interface Ingredient {
  name: string;
  grams: number;
}

export interface meal {
  name: string;
  image: string;
  steps: string;
  vegetarian: false;
  vegan: boolean;
  milkfree: boolean;
  glutenfree: boolean;
  ingredients: Ingredient[];
}

function Menu({ breakfast, lunch }: { breakfast: meal; lunch: meal }) {
  const dailyMenu = [breakfast, lunch];
  return (
    <div className="menuContainer">
      {dailyMenu?.map(function (meal: meal, i: number) {
        return (
          <div className="meal" key={i}>
            <span>Breakfast</span>
            <h1 className="headline">{meal?.name}</h1>
            <section className="top">
              <img src={meal?.image} alt={meal?.image} />
              <div className="right">
                <div className="square1 square">
                  <h2>Easy</h2>
                  <span>Difficulty</span>
                </div>
                <div className="square2 square">
                  <h2>15 min</h2>
                  <span>Preparation</span>
                </div>
                <div className="square3 square">
                  <h2>0 min</h2>
                  <span>Cooking</span>
                </div>
                <div className="square4 square">
                  <h2>15 min</h2>
                  <span>Total</span>
                </div>
              </div>
            </section>
            <section className="ingredients">
              <h2>Ingredients</h2>
              {meal?.ingredients.map(function (elm: Ingredient, i: number) {
                return (
                  <div key={i}>
                    <span>{elm.name}</span>
                    <span>{elm.grams * 100}</span>
                  </div>
                );
              })}
            </section>
            <section className="steps">
              <h2>Instructions</h2>
              <p>{meal?.steps}</p>
            </section>
          </div>
        );
      })}
    </div>
  );

  // return (
  //   <div className="menuContainer">
  //     <div className="meal">
  //       <span>Breakfast</span>
  //       <h1 className="headline">{breakfast?.name}</h1>
  //       <section className="top">
  //         <img src={breakfast?.image} alt={breakfast?.image} />
  //         <div className="right">
  //           <div className="square1 square">
  //             <h2>Easy</h2>
  //             <span>Difficulty</span>
  //           </div>
  //           <div className="square2 square">
  //             <h2>15 min</h2>
  //             <span>Preparation</span>
  //           </div>
  //           <div className="square3 square">
  //             <h2>0 min</h2>
  //             <span>Cooking</span>
  //           </div>
  //           <div className="square4 square">
  //             <h2>15 min</h2>
  //             <span>Total</span>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="ingredients">
  //         <h2>Ingredients</h2>
  //         {breakfast?.ingredients.map(function (elm: Ingredient, i: number) {
  //           return (
  //             <div key={i}>
  //               <span>{elm.name}</span>
  //               <span>{elm.grams * 100}</span>
  //             </div>
  //           );
  //         })}
  //       </section>
  //       <section className="steps">
  //         <h2>Instructions</h2>
  //         <p>{breakfast?.steps}</p>
  //       </section>
  //     </div>
  //   </div>
  // );
}

export default Menu;
