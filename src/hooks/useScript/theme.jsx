import "./theme.css";
import { useNavigate } from "react-router-dom";


export function ChoixTheme() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="button-container">
        <button id="button-animal" class="buttonT" onClick={() => {localStorage.setItem("Theme", "animal"); navigate("/game/joueurs/theme/cartes")}}>
          <img src="/Rules/T/animal.png" alt="animal" id="animal-img" />
        </button>

        <button id="button-geo" class="buttonT" onClick={() => {localStorage.setItem("Theme", "geo"); navigate("/game/joueurs/theme/cartes")}}>
          <img src="/Rules/T/geo.png" alt="geo" id="geo-img" />
        </button>

        <button id="button-objets" class="buttonT" onClick={() => {localStorage.setItem("Theme", "objets"); navigate("/game/joueurs/theme/cartes")}}>
          <img src="/Rules/T/objets.png" alt="objets" id="objets-img" />
        </button>
      </div>
      <button id="button-prev" onClick={() => {navigate("/game/joueurs")}}>retour</button>
    </div>
  );
}

export default function Theme() {
  return (
    <div id="game-container">
      <div id="upper-bar-container">
        <h1 id="Theme">Thème</h1>
        <img src="/bande-bg.png" alt="bande-bg" id="bande-bg-img" />
      </div>
      <ChoixTheme />
    </div>
  );
}