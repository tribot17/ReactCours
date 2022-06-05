import React from 'react';
import Recieve from "./Receive"
const Take = () => {
    let prenom = "Tristan";
    let nom = "Boettger"
    let date = "17/12/2001"
    let lilas = "les lilas"

    return (
        <div >
            <Recieve prenom={prenom} nom={nom} data={date} />
        </div>
    );
};

export default Take;