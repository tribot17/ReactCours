import React from 'react';

const Receive = ({prenom, nom, data}) => {
    return (
        <div>
            <p>prenom : {prenom}</p>
            <p>nom : {nom}</p>
            <p>date : {data}</p>


        </div>
    );
};

export default Receive;