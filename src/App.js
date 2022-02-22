
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run only once");
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.")
  }, [counter]);
    useEffect(() => {
    console.log("i run when keyword & counter change.")
  }, [keyword,counter]);

  return (
    <div>
      <input vaue={keyword} onChange={onChange} type="text" placeholder="Search here.."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      </div>
  );
}

export default App;
