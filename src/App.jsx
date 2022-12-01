import { BrowserRouter as HashRouter } from "react-router-dom";
import "./App.css";
import CustomNav from "./components/navbar/CustomNav";
import Rutas from "./router/Rutas";

function App() {
  return (
    <>
      <HashRouter>
        <nav>
          <CustomNav />
        </nav>
        <main className="mainContent">
          <Rutas />
        </main>
      </HashRouter>
    </>
  );
}

export default App;
