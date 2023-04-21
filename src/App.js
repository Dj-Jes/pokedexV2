
import { Routes, Route, HashRouter } from "react-router-dom";
import Nav from './components/shared/Nav'
import About from "./routes/About";
import Pokedex from "./routes/Pokedex";

function App() {
  return (
    <HashRouter>
        <Nav/>
      <>
        <Routes>
          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;