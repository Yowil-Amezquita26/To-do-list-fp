import { BrowserRouter as HashRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Rutas from "./router/Rutas";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <HashRouter>
          <Rutas />
        </HashRouter>
      </DndProvider>
    </>
  );
}

export default App;
