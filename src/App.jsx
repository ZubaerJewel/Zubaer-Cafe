import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bonus from "./Components/Bonus/Bonus";
import Header from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Bonus></Bonus>
    </div>
  );
}
// this is my knowledge app
export default App;
