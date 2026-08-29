import "./joueur.css";
import { useNavigate } from "react-router-dom";

export function Joueurs() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="button-container">
        <button id="button-1" class="button" onClick={() => {localStorage.setItem("Joueurs", "1"); navigate("/game/joueurs/theme") }}>
          <img src="/Rules/J/1.png" alt="1 joueur" id="1-img" />
        </button>

        <button id="button-2" class="button" onClick={() => {localStorage.setItem("Joueurs", "2"); navigate("/game/joueurs/theme") }}>
          <img src="/Rules/J/2.png" alt="2 joueurs" id="2-img" />
        </button>

        <button id="button-3" class="button" onClick={() => {localStorage.setItem("Joueurs", "3"); navigate("/game/joueurs/theme") }}>
          <img src="/Rules/J/3.png" alt="3 joueurs" id="3-img" />
        </button>

        <button id="button-4" class="button" onClick={() => {localStorage.setItem("Joueurs", "4"); navigate("/game/joueurs/theme") }}>
          <img src="/Rules/J/4.png" alt="4 joueurs" id="4-img" /> 
        </button>
      </div>
      <button id="button-prev" onClick={() => {navigate("/")}}>retour</button>
    </div>
  );
}

export default function Rules() {
  return (
    <div id="game-container">
      <div id="upper-bar-container">
        <h1 id="Joueurs">Nombre de joueur</h1>
        <img src="/bande-bg.png" alt="bande-bg" id="bande-bg-img" />
      </div>
      <Joueurs />
    </div>
  );
}
