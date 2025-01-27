import React, {useState, useEffect} from "react";

const PokeInfo = function ({name, id, type, weight, height}) {

    return(
        <>
            <ul className = "PokeInfo">
                <li>{`Name: ${name}`}</li>
                <li>{`ID: ${id}`}</li>
                <li>{`Type: ${type}`}</li>
                <li>{`Weight: ${weight}`}</li>
                <li>{`Height: ${height}`}</li>

            </ul>
        </>
    );
}

export default PokeInfo;