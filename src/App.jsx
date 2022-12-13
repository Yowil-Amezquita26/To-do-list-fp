import { BrowserRouter as HashRouter } from "react-router-dom";
import "./App.css";
import Rutas from "./router/Rutas";

function App() {
  return (
    <>
      <HashRouter>
        <Rutas />
      </HashRouter>
    </>
  );
}

export default App;
