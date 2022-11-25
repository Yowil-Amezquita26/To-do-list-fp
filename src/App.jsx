import { useState } from "react";
import "./App.css";
import "./components/task/AddTicket.css";
import Rutas from "./router/Rutas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Rutas />
    </div>
  );
}

export default App;
