import { Routes, Route, Link } from "react-router-dom";
import { Pruebauno } from "./Components/pruebauno";
import { Pruebados } from "./Components/pruebados";
import './index.css'

function Home() {
  return (
    <div>
      <h1>Índice</h1>
      <ul>
        <li><Link to="/prueba-uno">Prueba Uno</Link></li>
        <li><Link to="/prueba-dos">Prueba Dos</Link></li>
        <li><Link to="/prueba-tres">Prueba Tres</Link></li>
      </ul>
    </div>
  );
}

// function PruebaDos() {
//   return <h1>Esta es la página de Prueba Dos</h1>;
// }

function PruebaTres() {
  return <h1>Esta es la página de Prueba Tres</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prueba-uno" element={<Pruebauno />} />
      <Route path="/prueba-dos" element={<Pruebados /> } />
      <Route path="/prueba-tres" element={<PruebaTres />} />
    </Routes>
  );
}