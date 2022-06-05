import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [ville, setVille] = useState({});
  const [codePostal, setCodePostal] = useState();

  /*
  Le souci qu'on a eu en cours venait du fait que l'appel à l'API se faisait directement
  dans le useEffect dans le cas ci-dessous on fait une fonction qui elle-même appelle l'API
  */
  useEffect(() => {
    // loadData("75015");
    loadData2("75015");
  }, []);

  //Dans ce premier cas on va utiliser la fonction fetch classique de JavaScript
  const loadData = async (code) => {
    //Ne pas oublier de mettre await !
    await fetch(`https://api.zippopotam.us/fr/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setVille(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Dans le second cas on utlise la librairie axios
  const loadData2 = async (code) => {
    await axios.get(`https://api.zippopotam.us/fr/${code}`)
      .then((data) => {
        setVille(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setCodePostal(value);
  };

  const handleSearch = () => {
      if(codePostal.length == 5) loadData(codePostal)
  };

  return (
    <div>
      <h1>Page API</h1>

      <input type={"text"} name="postal_code" onChange={handleInputChange} />
      <button onClick={handleSearch}>Chercher</button>
      {ville && ville.places && (
        <div>
          {ville.country}
          <ul>
            {ville.places[0]["place name"]}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Api;
