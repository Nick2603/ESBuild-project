import React, {useState} from "react";
import "./index.css";
// @ts-ignore
import logo from "./logo.png";

const App = () => {
  const [state, setState] = useState<number>(10);

  const onBtnClick = () => {
    setState(state + 1);
  }

  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>value = ${state}</h1>
      <button onClick={onBtnClick}>Click</button>
    </div>
  )
};

export default App;
