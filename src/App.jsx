import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import pokeball from "./assets/images/pokeball.png";
import squirtle from "./assets/images/squirtle.png";
import wartortle from "./assets/images/wartortle.png";
import blastoise from "./assets/images/blastoise.png";
import psyduck from "./assets/images/psyduck.png";
import golduck from "./assets/images/golduck.png";
import poliwag from "./assets/images/poliwag.png";
import poliwhirl from "./assets/images/poliwhirl.png";
import poliwrath from "./assets/images/poliwrath.png";
import krabby from "./assets/images/krabby.png";
import kingler from "./assets/images/kingler.png";
import charmander from "./assets/images/charmander.png";
import charmeleon from "./assets/images/charmeleon.png";
import charizard from "./assets/images/charizard.png";
import vulpix from "./assets/images/vulpix.png";
import ninetails from "./assets/images/ninetails.png";
import flareon from "./assets/images/flareon.png";
import moltres from "./assets/images/moltres.png";
import cyndaquil from "./assets/images/cyndaquil.png";
import quilava from "./assets/images/quilava.png";
import typhlosion from "./assets/images/typhlosion.png";
import abra from "./assets/images/abra.png";
import kadabra from "./assets/images/kadabra.png";
import alakazam from "./assets/images/alakazam.png";
import slowpoke from "./assets/images/slowpoke.png";
import slowbro from "./assets/images/slowbro.png";
import exeggcute from "./assets/images/exeggcute.png";
import exeggutor from "./assets/images/exeggutor.png";
import drowzee from "./assets/images/drowzee.png";
import hypno from "./assets/images/hypno.png";
import mew from "./assets/images/mew.png";
import mewtwo from "./assets/images/mewtwo.png";
import espeon from "./assets/images/espeon.png";
import "./style.css";

const waterTypes = [
  {
    name: "Squirtle",
    evolvesFrom: null,
    type: "Water",
    details: "Tiny Turtle Pokémon. Height: 1' 8\", Weight: 19.8 lbs.",
    summary:
      "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.",
    image: squirtle,
  },
  {
    name: "Wartortle",
    evolvesFrom: "Squirtle",
    type: "Water",
    details: "Turtle Pokémon. Length: 3' 3\", Weight: 50 lbs.",
    summary:
      "Often hides in water to stalk unwary prey. When swimming quickly, it moves its ears to maintain balance.",
    image: wartortle,
  },
  {
    name: "Blastoise",
    evolvesFrom: "Wartortle",
    type: "Water",
    details: "Shellfish Pokémon. Height: 5' 3\", Weight: 188.5 lbs.",
    summary:
      "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
    image: blastoise,
  },
  {
    name: "Psyduck",
    evolvesFrom: null,
    type: "Water",
    details: "Duck Pokémon. Length: 2' 7\", Weight: 43 lbs.",
    summary:
      "While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.",
    image: psyduck,
  },
  {
    name: "Golduck",
    evolvesFrom: "Psyduck",
    type: "Water",
    details: "Duck Pokémon. Length: 5' 7\", Weight: 169 lbs.",
    summary:
      "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
    image: golduck,
  },
  {
    name: "Poliwag",
    evolvesFrom: null,
    type: "Water",
    details: "Tadpole Pokémon. Length: 2' 0\", Weight: 27 lbs.",
    summary:
      "Its newly grown legs prevent it from running. It appears to prefer swimming over trying to stand.",
    image: poliwag,
  },
  {
    name: "Poliwhirl",
    evolvesFrom: "Poliwag",
    type: "Water",
    details: "Tadpole Pokémon. Length: 3' 4\", Weight: 44 lbs.",
    summary:
      "Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
    image: poliwhirl,
  },
  {
    name: "Poliwrath",
    evolvesFrom: "Poliwhirl",
    type: "Water",
    details: "Tadpole Pokémon. Length: 4' 3\", Weight: 119 lbs.",
    summary:
      "An adept swimmer at both the front crawl and breaststroke. Easily overtakes the best human swimmers.",
    image: poliwrath,
  },
  {
    name: "Krabby",
    evolvesFrom: null,
    type: "Water",
    details: "River Crab Pokémon. Length: 1' 4\", Weight: 14 lbs.",
    summary:
      "Its pincers are not only powerful weapons, they are used for balance when walking sideways.",
    image: krabby,
  },
  {
    name: "Kingler",
    evolvesFrom: "Krabby",
    type: "Water",
    details: "Pincer Pokémon. Length: 4' 3\", Weight: 132 lbs.",
    summary:
      "The large pincer has 10,000 horsepower of crushing power. However, its huge size makes it unwieldy to use.",
    image: kingler,
  },
];

const fireTypes = [
  {
    name: "Charmander",
    evolvesFrom: null,
    type: "Fire",
    details: "Lizard Pokémon. Length: 2' 0\", Weight: 19 lbs.",
    summary:
      "Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail.",
    image: charmander,
  },
  {
    name: "Charmeleon",
    evolvesFrom: "Charmander",
    type: "Fire",
    details: "Flame Pokémon. Length: 3' 7\", Weight: 42 lbs.",
    summary:
      "When it swings its burning tail, it raises the temperature to unbearably high levels.",
    image: charmeleon,
  },
  {
    name: "Charizard",
    evolvesFrom: "Charmeleon",
    type: "Fire",
    details: "Flame Pokémon. Length: 5' 7\", Weight: 200 lbs.",
    summary:
      "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
    image: charizard,
  },
  {
    name: "Vulpix",
    evolvesFrom: null,
    type: "Fire",
    details: "Fox Pokémon. Length: 2' 0\", Weight: 22 lbs.",
    summary:
      "At the time of birth, it has just one tail. Its tail splits from the tip as it grows older.",
    image: vulpix,
  },
  {
    name: "Ninetails",
    evolvesFrom: "Vulpix",
    type: "Fire",
    details: "Fox Pokémon. Length: 3' 7\", Weight: 44 lbs.",
    summary:
      "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
    image: ninetails,
  },
  {
    name: "Flareon",
    evolvesFrom: "Eevee",
    type: "Fire",
    details: "Flame Pokémon. Length: 2' 11\", Weight: 55 lbs.",
    summary:
      "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
    image: flareon,
  },
  {
    name: "Moltres",
    evolvesFrom: null,
    type: "Fire",
    details: "Flame Pokémon. Length: 6' 7\", Weight: 132 lbs.",
    summary:
      "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
    image: moltres,
  },
  {
    name: "Cyndaquil",
    evolvesFrom: null,
    type: "Fire",
    details: "Fire Mouse Pokémon. Length: 1' 8\", Weight: 17 lbs.",
    summary:
      "It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back.",
    image: cyndaquil,
  },
  {
    name: "Quilava",
    evolvesFrom: "Cyndaquil",
    type: "Fire",
    details: "Volcano Pokémon. Length: 2' 11\", Weight: 42 lbs.",
    summary:
      "Be careful if it turns its back during battle. It means that is will attack with the fire on its back.",
    image: quilava,
  },
  {
    name: "Typhlosion",
    evolvesFrom: "Quilava",
    type: "Fire",
    details: "Volcano Pokémon. Length: 5' 7\", Weight: 175 lbs.",
    summary:
      "If its rage peaks, it becomes so hot that anything that touches it will instantly go up in flames.",
    image: typhlosion,
  },
];

const psychicTypes = [
  {
    name: "Abra",
    evolvesFrom: null,
    type: "Psychic",
    details: "Psi Pokémon. Length: 2' 11\", Weight: 43 lbs.",
    summary:
      "Using its ability to read minds, it will identify impending danger and teleport to safety.",
    image: abra,
  },
  {
    name: "Kadabra",
    evolvesFrom: "Abra",
    type: "Psychic",
    details: "Psi Pokémon. Length: 4' 3\", Weight: 125 lbs.",
    summary:
      "It emits special alpha waves from its body that induce headaches even to those just nearby.",
    image: kadabra,
  },
  {
    name: "Alakazam",
    evolvesFrom: "Kadabra",
    type: "Psychic",
    details: "Psi Pokémon. Length: 4' 11\", Weight: 106 lbs.",
    summary:
      "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
    image: alakazam,
  },
  {
    name: "Slowpoke",
    evolvesFrom: null,
    type: "Psychic",
    details: "Dopey Pokémon. Length: 3' 11\", Weight: 79 lbs.",
    summary:
      "Incredibly slow and dopey. It takes 55 seconds for it to feel pain when under attack.",
    image: slowpoke,
  },
  {
    name: "Slowbro",
    evolvesFrom: "Slowpoke",
    type: "Psychic",
    details: "Hermitcrab Pokémon. Length: 5' 3\", Weight: 173 lbs.",
    summary:
      "The Shellder that is latched onto Slowpoke's tail is said to feed on the host's left-over scraps.",
    image: slowbro,
  },
  {
    name: "Exeggcute",
    evolvesFrom: null,
    type: "Psychic",
    details: "Egg Pokémon. Length: 1' 4\", Weight: 6 lbs.",
    summary:
      "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
    image: exeggcute,
  },
  {
    name: "Exeggutor",
    evolvesFrom: "Exeggcute",
    type: "Psychic",
    details: "Coconut Pokémon. Length: 6' 7\", Weight: 265 lbs.",
    summary:
      "Legend has it that on rare occasions, one of its heads will drop off and continue on as an Exeggcute.",
    image: exeggutor,
  },
  {
    name: "Drowzee",
    evolvesFrom: null,
    type: "Psychic",
    details: "Hypnosis Pokémon. Length: 3' 3\", Weight: 71 lbs.",
    summary:
      "Puts enemies to sleep, then eats their dreams. Occasionally gets sick from eating bad dreams.",
    image: drowzee,
  },
  {
    name: "Hypno",
    evolvesFrom: "Drowzee",
    type: "Psychic",
    details: "Hypnosis Pokémon. Length: 5' 3\", Weight: 167 lbs.",
    summary:
      "When it locks eyes with an enemy, it will use a mix of psi moves such as Hypnosis and Confusion.",
    image: hypno,
  },
  {
    name: "Mew",
    evolvesFrom: null,
    type: "Psychic",
    details: "New Species Pokémon. Length: 1' 4\", Weight: 9 lbs.",
    summary:
      "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    image: mew,
  },
  {
    name: "Mewtwo",
    evolvesFrom: null,
    type: "Psychic",
    details: "Genetic Pokémon. Length: 6' 7\", Weight: 269 lbs.",
    summary:
      "A scientist created this Pokémon after years of horrific gene-splicing and DNA engineering experiments.",
    image: mewtwo,
  },
  {
    name: "Espeon",
    evolvesFrom: "Eevee",
    type: "Psychic",
    details: "Sun Pokémon. Length: 2' 11\", Weight: 58 lbs.",
    summary:
      "It uses the fine hair that covers its body to sense air currents and predict its enemy's actions.",
    image: espeon,
  },
];

function getRandomPokemon(array) {
  const randomPokemon = Math.floor(Math.random() * array.length);
  return array[randomPokemon];
}

export default function App() {
  const [generatedPokemon, setGeneratedPokemon] = useState(null);
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleReset() {
    setGeneratedPokemon(null);
    setChosenPokemon([]);
  }

  const handleClick = (type) => {
    let dataset;
    switch (type) {
      case "water":
        dataset = waterTypes;
        break;
      case "fire":
        dataset = fireTypes;
        break;
      case "psychic":
        dataset = psychicTypes;
        break;
      default:
        return;
    }
    const pokemon = getRandomPokemon(dataset);
    setGeneratedPokemon(pokemon);

    setChosenPokemon((prevChosenPokemon) => {
      const maxItems = screenWidth > 1024 ? 10 : 9;
      const updatedChosenPokemon = [...prevChosenPokemon, pokemon];
      if (updatedChosenPokemon.length > maxItems) {
        updatedChosenPokemon.shift();
      }
      return updatedChosenPokemon;
    });
  };

  return (
    <>
      <Header />
      <div id="app-container">
        <div id="main-content">
          <GeneratedPokemon
            generatedPokemon={generatedPokemon}
            onHandleReset={handleReset}
          />
          <PokeballContainer onClick={handleClick} />
        </div>
        <aside>
          <ChosenPokemonList chosenPokemon={chosenPokemon} />
        </aside>
      </div>
    </>
  );
}

function Header() {
  return <h1 id="main-header">Choose Your Pokémon! 🐣</h1>;
}

function PokeballContainer({ onClick }) {
  return (
    <div id="select-container">
      <h2 id="select-a-pokemon">Select A Pokémon</h2>
      <div id="all-pokeball-container">
        <div className="individual-pokeball-container">
          <p className="type" id="water">
            Water Type
          </p>
          <img
            className="pokeball"
            src={pokeball}
            onClick={() => onClick("water")}
          />
        </div>
        <div className="individual-pokeball-container">
          <p className="type" id="fire">
            Fire Type
          </p>
          <img
            className="pokeball"
            src={pokeball}
            onClick={() => onClick("fire")}
          />
        </div>
        <div className="individual-pokeball-container">
          <p className="type" id="psychic">
            Psychic Type
          </p>
          <img
            className="pokeball"
            src={pokeball}
            onClick={() => onClick("psychic")}
          />
        </div>
      </div>
    </div>
  );
}

function ChosenPokemonList({ chosenPokemon }) {
  if (!chosenPokemon.length) {
    return null;
  }

  return (
    <div className="white-background list-border">
      <h1>Your Pokémon</h1>
      <div id="pokemon-list">
        <ul>
          {chosenPokemon.map((pokemon, index) => (
            <li key={index}>
              <img src={pokemon.image} alt={pokemon.name} />
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GeneratedPokemon({ generatedPokemon, onHandleReset }) {
  if (!generatedPokemon) {
    return "";
  }

  return (
    <div className="add-border white-background padding-bottom">
      <div id="generated-pokemon-container">
        <h3 id="your-new-pokemon">Your New Pokémon</h3>
        <div id="image-container">
          <img id="generated-pokemon-image" src={generatedPokemon.image} />
        </div>
        <p>{generatedPokemon.name}</p>
        {generatedPokemon.evolvesFrom === null ? (
          ""
        ) : (
          <p>Evolves From: {generatedPokemon.evolvesFrom}</p>
        )}
        <p>Type: {generatedPokemon.type}</p>
        <p>{generatedPokemon.details}</p>
        <p>{generatedPokemon.summary}</p>
      </div>
      <button id="reset-button" onClick={onHandleReset}>
        Reset
      </button>
    </div>
  );
}

PokeballContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
};

GeneratedPokemon.propTypes = {
  generatedPokemon: PropTypes.shape({
    name: PropTypes.string,
    evolvesFrom: PropTypes.string,
    type: PropTypes.string,
    details: PropTypes.string,
    summary: PropTypes.string,
    image: PropTypes.string,
  }),
  onHandleReset: PropTypes.func.isRequired,
};

ChosenPokemonList.propTypes = {
  chosenPokemon: PropTypes.arrayOf(GeneratedPokemon),
};
