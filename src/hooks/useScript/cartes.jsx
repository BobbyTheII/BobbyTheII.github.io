import "./cartes.css";
import { useNavigate } from "react-router-dom";

export function Cartes() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="Cartes-container">
        <button id="cartes12" class="cartes" onClick={() => {localStorage.setItem("Cartes", "12"); navigate("/game/Memory") }}>
          <img src="/Rules/C/12.png" alt="12 cartes" id="12-img" />
        </button>

        <button id="cartes20" class="cartes" onClick={() => {localStorage.setItem("Cartes", "20"); navigate("/game/Memory") }}>
          <img src="/Rules/C/20.png" alt="20 cartes" id="20-img" />
        </button>

        <button id="cartes30" class="cartes" onClick={() => {localStorage.setItem("Cartes", "30"); navigate("/game/Memory") }}>
          <img src="/Rules/C/30.png" alt="30 cartes" id="30-img" />
        </button>
      </div>
      <button id="button-prev" onClick={() => {navigate("/game/joueurs/theme")}}>retour</button>
    </div>
  );
}

export default function Rules() {
  return (
    <div id="game-container">
      <div id="upper-bar-container">
        <h1 id="Carte">Nombre de carte</h1>
        <img src="/bande-bg.png" alt="bande-bg" id="bande-bg-img" />
      </div>
      <Cartes />
    </div>
  );
}
