import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Enfant from "./Enfant";

function App() {
  const [count, setCount] = useState(0);
  const [fullName, setFullName] = useState("");
  function test(i) {
    console.log("je suis dans le parent");
    console.log(" je recupere mon i de l'enfant ", i);
    setCount(i);
  }

  return (
    <>
      <p>parent </p>
      <Enfant nom="Mahdi" callBack={test} callBackName={setFullName} />
      <p>the current value of count : {count}</p>

      <p> full name : {fullName}</p>
    </>
  );
}

export default App;
