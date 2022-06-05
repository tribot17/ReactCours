import { useEffect, useReducer, useState } from "react";
import Calculatrice from "./Components/Calculatrice";
import Element from "./Components/Element";
import Take from "./Components/Take";
import Affichage from "./Exercice/Affichage";
//State inital
const intialState = { count: 0 };

//Fonction du useReducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function App() {
  // const [maVariable, setMaVarible] = useState(1)
  // const nom = "boettger";
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialState);

  // useEffect(() => {
  //   console.log("Dom chargé");
  // })

  // useEffect(() => {
  //     console.log("count1 changé");
  // }, [count1])

  // useEffect(() => {
  //   console.log("count2 changé");
  // }, [count2])

  // const handleCount1 = () => {
  //   setCount1(count1 + 1)
  // }

  // const handleCount2 = () => {
  //   setCount2(count2 + 1)
  // }

  return (
    <div className="App">
      {/* <button onClick={handleCount1}>Click 1</button> */}
      {/* <button onClick={handleCount2}>Click 2</button> */}
      {/* Je crééer mon élément et je lui fait passer des données grace au props (nom) */}
      {/* <Element nom={nom} prenom=""/> */}
      {/* <button onClick={() => dispatch({type:"increment"})}></button> */}
      {/* <button onClick={() => dispatch({type:"decrement"})}></button> */}

      {/* {false ? count : "rien"} */}
      {/* <Take/> */}
      {/* <Calculatrice /> */}
    </div>
  );
}

export default App;