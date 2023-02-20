import "./App.css";

function ChildComponent({ showSomeStuff }) {
  console.log("ChildComponent renders");

  return (
    <div>
      <button onClick={showSomeStuff}>Click</button>
    </div>
  );
}

export default ChildComponent;
