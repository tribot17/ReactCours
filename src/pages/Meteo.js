import React, { useState } from 'react';

const Meteo = () => {
    const [etat, setEtat] = useState(true) 
    return (
        <div>
            <button onClick={() => setEtat(!etat)}></button>
            <h1></h1>
            {etat && <p>la valeur</p>
            }
        </div>
    );
};

export default Meteo;