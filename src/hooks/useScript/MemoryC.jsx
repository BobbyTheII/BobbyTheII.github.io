import './MemoryC.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState} from "react";


var Animaux = ["Elephant", "Chien", "Chat", "Lezard", "Oiseau", "Lapin",
    "Lion", "Tigre", "Hamster", "Kangourou", "Poulet", "Requin", "Pieuvre",
    "Dauphin", "Baleine"];

var Objet = ["Fleur", "Fusee", "Pelle", "Tracteur", "Bouteille",
    "Chargeur", "Chaise", "Sceau", "Cuillere", "Arosoir", "Lampe", "Colis",
    "Banc", "Lit", "Trampoline"];

var Geo = ["Cercle","Rectangle","Caree","Ellipse","Triangle","Cylindre","Cone","Cube",
    "Pentagone","Hexagone","Heptagone","Octogone","Prisme","Trapeze","Parallelograme"];

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function creerJeu(){
    const nbCartes = parseInt(localStorage.getItem("Cartes"));
    const theme = localStorage.getItem("Theme");
    var cartes = [];
    switch(theme){
        case "animal":
            Animaux = shuffle(Animaux);
            for (let i = 0; i < nbCartes / 2; i++) {
                cartes.push(Animaux[i]);
                cartes.push(Animaux[i]);
            }
            break;
        case "objets":
            Objet = shuffle(Objet);
            for (let i = 0; i < nbCartes / 2; i++) {
                cartes.push(Objet[i]);
                cartes.push(Objet[i]);
            }
            break;
        case "geo":
            Geo = shuffle(Geo);
            for (let i = 0; i < nbCartes / 2; i++) {
                cartes.push(Geo[i]);
                cartes.push(Geo[i]);
            }
            break;
        default:
            cartes.push("fail");
            break;
    }
    return shuffle(cartes);
}

export function Micro(){
    const [pressed, setPressed]=useState(false);

    return (
        <button id="micro-button" 
        onMouseDown={()=>setPressed(true)}
        onMouseUp={()=>setPressed(false)}
        onMouseLeave={()=>setPressed(false)}
        onTouchStart={()=> setPressed(true)}
        onTouchEnd={()=> setPressed(false)}
        >
            <img src={pressed ? "/micro-pressed.png" : "/micro.png"} 
            alt="micro" id="micro" />
        </button>
    )
}

export function FlipCard({carte,index,isFlipped,nbCartes,onCardClick}){
    return (
        <button
            className={"carte" + nbCartes}
            onClick={() => onCardClick(carte,index)}
        >
            <img
                src={isFlipped ? `/cartes/${carte}.png` : "/cartes/card.png"}
                className={"carte" + nbCartes}
            />
        </button>
    );
}

export function LoadCards({cartes,onCardClick,flippedCards}){
    const nbCartes = parseInt(localStorage.getItem("Cartes"));
    if(nbCartes === 12) {
        return(
            <div id="cartes12" class="cartesJeu">
                <div id="rangée1" class="rangée12">
                    <div class="numeros">
                        <h1 class="numero">1</h1>
                        <h1 class="numero">2</h1>
                        <h1 class="numero">3</h1>
                        <h1 class="numero">4</h1>
                    </div>
                    {cartes.slice(0, 4).map((carte, index) => (
                        <FlipCard
                            carte={carte}
                            index={index}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index)}
                        />
                    ))}
                </div>
                <div id="rangée2" class="rangée12">
                    <div class="numeros">
                        <h1 class="numero">5</h1>
                        <h1 class="numero">6</h1>
                        <h1 class="numero">7</h1>
                        <h1 class="numero">8</h1>
                    </div>
                    {cartes.slice(4, 8).map((carte, index) => (
                        <FlipCard
                            carte={carte}
                            index={index + 4}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index +4)}
                        />
                    ))}
                </div>
                <div id="rangée3" class="rangée12">
                    <div class="numeros">
                        <h1 class="numero">9</h1>
                        <h1 class="numeroD">10</h1>
                        <h1 class="numeroD">11</h1>
                        <h1 class="numeroD">12</h1>
                    </div>
                    {cartes.slice(8, 12).map((carte, index) => (
                        <FlipCard
                            key={index + 8}
                            carte={carte}
                            index={index + 8}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index +8)}
                        />
                    ))}
                </div>
            </div>
        )
    }
    else if(nbCartes === 20) {
        return(
            <div id="cartes20" class="cartesJeu">
                <div id="rangée1" class="rangée20">
                    <div class="numeros20">
                        <h1 class="numero20">1</h1>
                        <h1 class="numero20">2</h1>
                        <h1 class="numero20">3</h1>
                        <h1 class="numero20">4</h1>
                        <h1 class="numero20">5</h1>
                    </div>
                    {cartes.slice(0, 5).map((carte, index) => (
                        <FlipCard
                            key={index}
                            carte={carte}
                            index={index}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index)}
                        />
                    ))}
                </div>
                <div id="rangée2" class="rangée20">
                     <div class="numeros20">
                        <h1 class="numero20">6</h1>
                        <h1 class="numero20">7</h1>
                        <h1 class="numero20">8</h1>
                        <h1 class="numero20">9</h1>
                        <h1 class="numero20D">10</h1>
                    </div>
                    {cartes.slice(5, 10).map((carte, index) => (
                        <FlipCard
                            key={index + 5}
                            carte={carte}
                            index={index + 5}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+5)}
                        />
                    ))}
                </div>
                <div id="rangée3" class="rangée20">
                     <div class="numeros20">
                        <h1 class="numero20D">11</h1>
                        <h1 class="numero20D">12</h1>
                        <h1 class="numero20D">13</h1>
                        <h1 class="numero20D">14</h1>
                        <h1 class="numero20D">15</h1>
                    </div>
                    {cartes.slice(10, 15).map((carte, index) => (
                        <FlipCard
                            key={index + 10}
                            carte={carte}
                            index={index + 10}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+10)}
                        />
                    ))}
                </div>
                <div id="rangée4" class="rangée20">
                     <div class="numeros20">
                        <h1 class="numero20D">16</h1>
                        <h1 class="numero20D">17</h1>
                        <h1 class="numero20D">18</h1>
                        <h1 class="numero20D">19</h1>
                        <h1 class="numero20D">20</h1>
                    </div>
                    {cartes.slice(15,20).map((carte, index) => (
                        <FlipCard
                            key={index + 15}
                            carte={carte}
                            index={index + 15}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+15)}
                        />
                    ))}
                </div>
            </div>
        )
    }
    else{
        return(
            <div id="cartes30" class="cartesJeu"> {/*5 rangées de 6*/}
                <div id="rangée1" class="rangée">
                    <div class="numeros30">
                        <h1 class="numero30">1</h1>
                        <h1 class="numero30">2</h1>
                        <h1 class="numero30">3</h1>
                        <h1 class="numero30">4</h1>
                        <h1 class="numero30">5</h1>
                        <h1 class="numero30">6</h1>
                    </div>
                    {cartes.slice(0, 6).map((carte, index) => (
                        <FlipCard
                            key={index}
                            carte={carte}
                            index={index}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index)}
                        />
                    ))}
                </div>
                <div id="rangée2" class="rangée">
                    <div class="numeros30">
                        <h1 class="numero30">7</h1>
                        <h1 class="numero30">8</h1>
                        <h1 class="numero30">9</h1>
                        <h1 class="numero30D">10</h1>
                        <h1 class="numero30D">11</h1>
                        <h1 class="numero30D">12</h1>
                    </div>
                    {cartes.slice(6, 12).map((carte, index) => (
                        <FlipCard
                            key={index + 6}
                            carte={carte}
                            index={index + 6}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+6)}
                        />
                    ))}
                </div>
                <div id="rangée3" class="rangée">
                    <div class="numeros30">
                        <h1 class="numero30D">13</h1>
                        <h1 class="numero30D">14</h1>
                        <h1 class="numero30D">15</h1>
                        <h1 class="numero30D">16</h1>
                        <h1 class="numero30D">17</h1>
                        <h1 class="numero30D">18</h1>
                    </div>
                    {cartes.slice(12, 18).map((carte, index) => (
                        <FlipCard
                            key={index + 12}
                            carte={carte}
                            index={index + 12}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+12)}
                        />
                    ))}
                </div>
                <div id="rangée4" class="rangée">
                    <div class="numeros30">
                        <h1 class="numero30D">19</h1>
                        <h1 class="numero30D">20</h1>
                        <h1 class="numero30D">21</h1>
                        <h1 class="numero30D">22</h1>
                        <h1 class="numero30D">23</h1>
                        <h1 class="numero30D">24</h1>
                    </div>
                    {cartes.slice(18, 24).map((carte, index) => (
                        <FlipCard
                            key={index + 18}
                            carte={carte}
                            index={index + 18}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+18)}
                        />
                    ))}
                </div>
                <div id="rangée5" class="rangée">
                    <div class="numeros30">
                        <h1 class="numero30D">25</h1>
                        <h1 class="numero30D">26</h1>
                        <h1 class="numero30D">27</h1>
                        <h1 class="numero30D">28</h1>
                        <h1 class="numero30D">29</h1>
                        <h1 class="numero30D">30</h1>
                    </div>
                    {cartes.slice(24, 30).map((carte, index) => (
                        <FlipCard
                            key={index +24}
                            carte={carte}
                            index={index +24}
                            nbCartes={nbCartes}
                            onCardClick={onCardClick}
                            isFlipped={flippedCards.includes(index+24)}
                        />
                    ))}
                    {/* <img src={"/cartes/" + cartes[29] + ".png"} alt={cartes[29]} className="carte" /> */}
                </div>
            </div>
        )
    }
}

export function LoadPlayers({joueurA,Points,error,cartesVu}){
    const nbJoueurs = parseInt(localStorage.getItem("Joueurs"));
    const navigate = useNavigate();
    var joueurS, joueurT, joueurQ ;
    if(nbJoueurs===1){
        return (
            <header id="player-bar">
                <h1 id="joueur"> joueur : {Points[joueurA - 1]} pts</h1>
                {error && <ChoixImpossible cartesVu={cartesVu}/>}
                <div id="config-bar-solo">
                    <button id="quit-button" onClick={() => navigate("/")}>
                        Quitter
                    </button>
                    <Micro />
                </div>
            </header>
        );
    }
    joueurS = parseInt(((joueurA)%nbJoueurs)+1);
    joueurT = parseInt(((joueurA+1)%nbJoueurs)+1);
    joueurQ = parseInt(((joueurA+2)%nbJoueurs)+1);
    return (
        <header id="player-bar">
            <h1 id="joueur-actuel"> joueur{joueurA} : {Points[joueurA - 1]} pts</h1>
            <header id="score-bar">
                <p id="score">Scores : <br></br>Joueur{joueurS} : {Points[joueurS -1]} pts</p>
                {nbJoueurs>=3 && <p id="score2"><br></br>Joueur{joueurT} : {Points[joueurT -1]} pts</p>}
                {nbJoueurs>3 && <p id="score2"><br></br>joueur{joueurQ} : {Points[joueurQ -1]} pts</p>}
            </header>
            {error && <ChoixImpossible cartesVu={cartesVu}/>}
            <div id="config-bar">
                <button id="quit-button" onClick={() => navigate("/")}>
                    Quitter
                </button>
                <Micro />
            </div>
        </header>
    );
}

export function FinJeu({Points}){
    const nbJoueurs = parseInt(localStorage.getItem("Joueurs"));
    const nbCartes = parseInt(localStorage.getItem("Cartes"));
    const navigate = useNavigate();
    var Premier = parseInt(0);
    var indiceP = parseInt(0);
    var Deuxieme= parseInt(0);
    var indiceD = parseInt(0);
    var Troisieme = parseInt(0);
    var indiceT = parseInt(0);
    var Quatrieme = parseInt(0);
    var indiceQ = parseInt(0);
    var tabP = [];
    tabP.push(parseInt(Points[0]));tabP.push(parseInt(Points[1]));
    tabP.push(parseInt(Points[2]));tabP.push(parseInt(Points[3]));

    for(let i = 0;i<nbJoueurs;i++){
        if(tabP[i]>Premier){
            Premier = tabP[i];
            indiceP = i + 1;
        }
    }
    if(nbJoueurs>=2){
        tabP[indiceP - 1] = 0;
        for(let i = 0;i<nbJoueurs;i++){
            if(tabP[i]>Deuxieme){
                Deuxieme = tabP[i];
                indiceD = i + 1;
            }
        }
        if(nbJoueurs>=3){
            tabP[indiceD - 1] = 0;
            for(let i = 0;i<nbJoueurs;i++){
                if(tabP[i]>=Troisieme){
                    Troisieme = tabP[i];
                    indiceT = i + 1;
                }
            }
            if(nbJoueurs>3){
                Quatrieme = (nbCartes/2) - (Premier+Deuxieme+Troisieme); 
                indiceQ = 10 - (indiceD + indiceP + indiceT);
            }
        }
    }
    
    if(nbJoueurs===1){
            return (
                    <div id="game-body">
                        <div id="End">
                            <h1 id="texte">Bravo</h1>
                            <div id="button-choice-single">
                                <button id="rejouer-single" onClick={()=> location.reload()}>Rejouer</button>
                                <button id="quit-button-end" onClick={() => navigate("/")}>Quitter</button>
                            </div>
                        </div>
                    </div>
                );
    }
    return(
    <div id="game-body">
        <div id="End">
            <h1 id="texte">Resulats</h1>
            <div id="podium">
                <h1 id="Premier">Joueur{indiceP} : {Premier} pts</h1>
                {nbJoueurs>=2 && <h2 id="next">Joueur{indiceD} : {Deuxieme} pts</h2>}
                {nbJoueurs>=3 && <h2 id="next2"><br></br>joueur{indiceT} : {Troisieme} pts</h2>}
                {nbJoueurs>3 && <h2 id="next2"><br></br>joueur{indiceQ} : {Quatrieme} pts</h2>}
            </div>
            <div id="button-choice">
                <button id="rejouer" onClick={()=> location.reload()}>Rejouer</button>
                <button id="quit-button-end" onClick={() => navigate("/")}>Quitter</button>
            </div>
        </div>
    </div>
);    
}

export function ChoixImpossible({cartesVu}){
    cartesVu = cartesVu.map((x)=> x+1);
    cartesVu = cartesVu.map((x)=> x.toString()+" ");
    return (
        <div id="player-bar">
            <h1 id="error-message">Carte déjà retournée<br></br>
            Cartes retournées : {cartesVu}</h1>
        </div>
    );
}

export function Game({cartes}){
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [joueurA, setJoueurA] = useState(1);
    const [Points, setPoints] = useState([0, 0, 0, 0]);
    const [isGameFinished, setIsGameFinished] = useState(false);
    const [flippedCards, setFlippedCards] = useState([]);
    const [error, setError] = useState(false);
    const nbJoueurs = parseInt(localStorage.getItem("Joueurs"));
   
    function jouerUnTour(first, second) {
        var stay = false;
        if (first.value === second.value) {
            setPoints(prev => {
                const newPoints = [...prev];
                newPoints[joueurA - 1] += 1;
                return newPoints;
            });
            stay = true;
        }
        else{
            setJoueurA(prev => (prev % nbJoueurs) + 1);
        }

        const totalPoints = Points.reduce((a, b) => a + b, 0);
        if (totalPoints + 1 === cartes.length / 2 && first.value === second.value) {
            setIsGameFinished(true);
        }
        return stay;

    }

    function handleCardClick(carte,index) {
        if (!firstCard && !flippedCards.includes(index)) {
            setFirstCard({ value: carte, index });
            setFlippedCards(prev => {
                const newPoints = [...prev];
                newPoints.push(index);
                return newPoints;
            });
        } else if(!flippedCards.includes(index)){
            setSecondCard({ value: carte, index });
            setFlippedCards(prev => {
                const newPoints = [...prev];
                newPoints.push(index);
                return newPoints;
            });
            var stay = jouerUnTour(firstCard, { value: carte, index });
            if(stay){
                setTimeout(() => { 
                    setFirstCard(null);
                    setSecondCard(null);
                }, 1000);
            }
            else{
                setTimeout(() => {
                    setFlippedCards(prev => {
                        const newPoints = [...prev];
                        newPoints.pop();
                        newPoints.pop();
                        return newPoints;
                    });
                    setFirstCard(null);
                    setSecondCard(null);
                }, 1000);
            }
        }
        else{
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    }

    if (isGameFinished) {
        return <FinJeu Points={Points} />;
    }

    return (
        <div id="null">
            <LoadPlayers joueurA={joueurA} Points={Points} error={error} cartesVu={flippedCards}/>
            <LoadCards 
                cartes={cartes} 
                onCardClick={handleCardClick} 
                flippedCards={flippedCards}
            />
        </div>
    );
}

export default function MemoryC() {
    var cartes = creerJeu() ;
    return (
        <div id="game-body">
            <div id="memoryC">
                <Game cartes={cartes} />
            </div>
        </div>
    );
}