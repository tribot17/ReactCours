import React, { useState, useCallback } from "react";
import Cadre from "./Cadre";

const Affichage = () => {
  const initalValue = [
    {
      nom: "Jean-Luc",
      photo:
        "http://rotek.fr/wp-content/uploads/2017/03/quotidien-jean-luc-melenchon-un-meme-2df1c7-0@1x-1-300x300.jpg",
      voix: "",
      winner: false,
    },
    {
      nom: "Marine",
      photo: "https://www.humanite.fr/sites/default/files/images/41144.HR.jpg",
      voix: "",
      winner: false,
    },
    {
      nom: "Jean",
      photo:
        "https://static.lexpress.fr/medias_11951/w_1000,h_563,c_fill,g_north/v1540039781/jean-lassalle-a-paris-le-27-juin-2017_6119080.jpg",
      voix: "",
      winner: false,
    },
    {
      nom: "Anne",
      photo:
        "https://lesjours.fr/ressources/square/people/anne-hidalgo-presidentielle.jpeg",
      voix: "",
      winner: false,
    },
    {
      nom: "Phillipe",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/Philippe_Poutou_2020_%28cropped%29.png",
      voix: "",
      winner: false,
    },
  ];
  const [candidats, setCandidats] = useState(initalValue);
  const [inputValue, setInputValue] = useState();
  const [winner, setWinner] = useState(false);
  //Fonction de mise à jour force le dom à se rerendre
  const [, fctMiseAJour] = useState({});
  const miseAJour = useCallback(() => fctMiseAJour({}), []);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleVoix = (nom, index) => {
    let temp = candidats;
    temp[index].voix = inputValue[nom];
    setCandidats(temp);
    miseAJour();
  };

  const checkWinner = () => {
    let sorted = candidats;
    sorted.sort((a, b) => (a.voix < b.voix ? 1 : -1));
    candidats.forEach((n, i) => {
      if (n.nom == sorted[0].nom) {
        candidats[i].winner = true;
        setWinner(n.nom);
      }
    });
  };

  return (
    <div>
      <h1>Election Simulations</h1>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {candidats &&
          candidats.map((element, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px",
              }}
              key={index}
            >
              <Cadre
                nom={element.nom}
                photo={element.photo}
                voix={candidats[index].voix}
                winner={element.winner}
              />
              {!winner && (
                <>
                  <input
                    type="text"
                    name={element.nom}
                    onChange={handleInputChange}
                  />
                  <button onClick={() => handleVoix(element.nom, index)}>
                    Valider
                  </button>
                </>
              )}
            </div>
          ))}
        {!winner ? (
          <button onClick={checkWinner}>Check Winner</button>
        ) : (
          <p>{winner}</p>
        )}
      </ul>
    </div>
  );
};

export default Affichage;
