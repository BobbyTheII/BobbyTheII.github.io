import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MyApp from './hooks/useScript/memory.jsx'
import Joueurs from './hooks/useScript/joueur.jsx'
import Theme from './hooks/useScript/theme.jsx'
import Cartes from './hooks/useScript/cartes.jsx'
import Memory from './hooks/useScript/MemoryC.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyApp />} />
        <Route path="/game/joueurs" element={<Joueurs  />} />
        <Route path="/game/joueurs/theme" element={<Theme />} />
        <Route path="/game/joueurs/theme/cartes" element={<Cartes />} />
        <Route path="/game/Memory" element={<Memory />} />
      </Routes>
    </BrowserRouter>
  );
}