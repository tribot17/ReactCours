import React from "react";
import { Link } from "react-router-dom";

const Cadre = ({ nom, photo, voix, winner }) => {
  return (
    <div>
      <li className={winner && "winner"}>
        <h3>Nom : {nom}</h3>
        <Link to={`/${nom}`}>
          <img src={photo} style={{ width: "150px", height: "150px" }} alt="" />
        </Link>
        <p>Nombre de voix : {voix}</p>
      </li>
    </div>
  );
};

export default Cadre;
