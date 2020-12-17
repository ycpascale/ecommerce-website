import React from 'react';
import {
    useParams
  } from "react-router-dom";


function DisplayItem(){
    let { earringId } = useParams();
    return(
        <div><p>dbdgdjhajhk {earringId}</p></div>
    );
}

export default DisplayItem;