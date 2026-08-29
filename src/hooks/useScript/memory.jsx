import './memory.css'
import { useNavigate } from "react-router-dom";

export function Memory() {
  const navigate = useNavigate();

  function goToGame() {
    navigate("/game/joueurs");
  }

  return (
    <div id="memory">
      <button id="button" onClick={goToGame}>
        Jouer
      </button>
    </div>
  );
}

export default function MyApp() {
  return (
    <div id="body">
      <header id="upper-bar">
        <img src="/images.png" alt="Logo" id="banner-img" />
        <img src="/images.png" alt="Logo2" id="banner-img2" />
      </header>
      <div id="main-row">
      <header id="header-left">
        <div id="left-side-bar">
          <h1 id="HTP" className="text">Memory</h1>
          <h1 className="text">Règles</h1>
          <h2 id="regle" className="text">
            Le joueur qui a la main doit choisir <strong><em>deux <br></br>cartes</em></strong> à retourner.<br />
            Il appuye sur <em>espace</em> pour déclencher le <br></br>micro.<br />
            Si les cartes ne sont pas identiques, le <br></br>jeu continue avec le joueur suivant.<br />
            Le but est de se souvenir quel numéro <br></br>appartient à chaque paire afin de <br></br>retourner deux cartes identiques.<br />
            Quand l’un des participants retourne deux <br></br>cartes identiques, elles sont enlevées du <br></br>jeu et le joueur peut <em>rejouer</em>.
          </h2>
        </div>
      </header>
      <div id="right-side">
        <Memory />
      </div>
    </div>
    <div id="down-bar">
        <h1 className="text">Contact Me</h1>
        <div id="contact">
          <h2 className="text" id="contact"><strong>Mail</strong> : Bobbyjessicalesang@gmail.com</h2>
          <h2 className="text" id="contact"><strong>GitHub</strong> : <a href="https://github.com/BobbyTheII">BobbyTheII</a></h2>
        </div>
    </div>
    </div>
  );
}