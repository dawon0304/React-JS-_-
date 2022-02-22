
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return() => console.log("destroyed :( ");
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);  
  /*setShowing을 통해 이전 value를 받아온 다음에, 그 value의 반댓값을 return 할 것이다. */
  
  return (
    <div>
      {showing ? <Hello /> : null } 
      {/* 만약 showing이 true라면 hello component를 render할꺼야. 아니라면 아무것도 안보여줄꺼야 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
