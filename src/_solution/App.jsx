import { useEffect, useState, useCallback } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const [state, setState] = useState(0);

  const showSomeStuff = useCallback(() => {
    setState((prevState) => prevState + 1);
    console.log("Hello!");
  }, []);

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
