import { useEffect, useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const [state, setState] = useState(0);

  function showSomeStuff() {
    setState((prevState) => prevState + 1);
    console.log("Hello!");
  }

  useEffect(() => {
    showSomeStuff();
    console.log("useEffect");
  }, [showSomeStuff]);

  return (
    <div className="App">
      {state}
      <ChildComponent showSomeStuff={showSomeStuff} />
    </div>
  );
}

export default App;
