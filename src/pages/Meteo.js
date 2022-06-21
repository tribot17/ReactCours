import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";

const Meteo = () => {
  const [dataVille, setData] = useState([]);
  const [displayAir, setDisplayAir] = useState(false);
  const [, fctMiseAJour] = useState({});
  const miseAJour = useCallback(() => fctMiseAJour({}), []);

  const villes = ["Paris", "Madrid", "Marseille"];
  let loaded = false;
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    villes.forEach((element, i) => {
      loadCities(element);
    });
    loaded = true;
  };

  const loadCities = async (ville) => {
    let temp = dataVille;
    if (!loaded) {
      await axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=7cc3a2bceea641688ae222124211406&q=${ville}&aqi=yes`
        )
        .then((data) => temp.push(data.data));
    }
    setData(temp);
    miseAJour();
  };

  return (
    <div>
      {console.log(dataVille)}
      {dataVille &&
        dataVille.map((element, i) => (
          <div key={i}>
            <p>Ville : {element.location.name}</p>
            <p>Température : {element.current.temp_c}</p>
            {displayAir && (
              <p>Qualité de l'air :{element.current.air_quality.co}</p>
            )}
            <p>Condition :{element.current.condition.text} </p>
            <img src={element.current.condition.icon} alt="" />
          </div>
        ))}
      <button onClick={() => setDisplayAir(!displayAir)}>Show Air</button>
    </div>
  );
};

export default Meteo;
