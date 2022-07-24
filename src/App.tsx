import "./App.css";
import "reflect-metadata";
import { Ninja } from "./classes/Ninja";


function App() {
  const ninja = new Ninja();
  return (
    <div className="App">
      werwerwe
      {ninja.fight()} <div>{ninja.sneak()}</div>
    </div>
  );
}

export default App;
