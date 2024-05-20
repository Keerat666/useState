import { useState, useRef } from "react";
import "./index.css";
import pokemonHidden from "../../img/pokemon-question.png";
import pokemonReveal from "../../img/pokemon-answer.png";
import answer from "../../audio/it-pikachu.mp3";

function Pokemon() {
  const [reveal, setReveal] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const showPokemon = () => {
    if (!reveal)
      audioRef.current.play().catch((err) => {
        console.error("Audio playback error:", err);
      });

    setReveal(!reveal);
  };

  return (
    <div className="pokemon">
      <h3>Who's that Pokemon? </h3>
      <img
        width="500px"
        height="500px"
        src={!reveal ? pokemonHidden : pokemonReveal}
        alt="a pokemon"
      ></img>
      <label class="switch">
        <input type="checkbox" onClick={showPokemon} />
        <span class="slider round"></span>

        <h5>Reveal</h5>
      </label>
      {reveal && <h3 className="answer">It's PIKACHU!</h3>}

      <audio ref={audioRef} src={answer} type="audio/mpeg" />
    </div>
  );
}

export default Pokemon;
