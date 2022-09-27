import React from "react";
import data from "../utils/Data";
import genreList from "../utils/GenreList";

import { useState, useEffect } from "react";

const Genre = ({ genre }) => {
  const [convert, setConvert] = useState([]);
  const [genres] = genre
  

async function  hash(){
  const genresRes = await fetch(data.requestGenre);
  const genresData = await genresRes.json();
  let genresThing = genresData["genres"]
  let genresHash = {};
  let parseGenre = {id: 0, name: ''}
  for (let i in genresThing){
    genresHash[genresThing[i]["id"]] = genresThing[i]["name"]

  }

const output = Object.assign(parseGenre, genresHash);
for (let index = 0; index < genres.length; index++) {
  setConvert(output[genres])
  
}



}

console.log(convert)
//console.log(convert)

hash()
  return (
    <div className="indicator absolute">
      <div className="card border ">
        <div className="card-body">
    sssssssssssssssss
        </div>
      </div>
    </div>
  );
};

export default Genre;
/*
      {convert.map((items, i) => {
            <span key={i}  className=" text-xl text-white border-2 h-96 w-96">{items["0"]}</span>;
          })}
          */