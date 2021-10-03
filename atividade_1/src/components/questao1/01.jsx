import React from "react";

import Main01 from './main01'

export default function(){

    var info = {
        name: "Francisco Jhonny de Sousa",
        course: "Digital Design",
        hometown: "Quixadá",
        email: "jhonnysousa@alu.ufc.br"
    }
        

    return (
        <div className="container">
            <div className="main">
                <Main01 myInfo={info}/>
            </div>  
        </div>
    )
}

