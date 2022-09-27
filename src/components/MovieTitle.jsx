import React from "react";
import data from "../utils/Data";
import { useState, useEffect } from "react";


const MovieTitle = ({title}) => {
  const [convert, setConvert] = useState([]); 

  return (
    <div className="indicator absolute">
      <div className="card border ">
        <div className="card-body">

        </div>
      </div>
    </div>
  )
  };

export default MovieTitle;



/*
          {convert.map((items,id) =>{
            <span>{items.name}</span>
          })}
  
*/          