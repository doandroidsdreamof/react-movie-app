import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../Data";
import { useState, useEffect } from "react";

const Cast = () => {
  let { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [bio, setBio] = useState([]);

  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/`;

  useEffect(() => {

    fetch(baseUrl + data.requestCast)
      .then((res) => res.json())
      .then((get) => setCasts(get.cast))
      .catch((err) => {
        console.error(err);
      });


    
  }, []);

  function getBio(){
    let bioId = casts.map((el) => el.name);
    const baseUrlBio = `https://api.themoviedb.org/3/search/${bioId}?`;
    fetch(baseUrlBio + data.requestPeople)
    .then((res) => res.json())
    .then((get) => setBio(get))
    .catch((err) => {
      console.error(err);
    });
    console.log('burası', bioId)
  }





  return <div className="border-2 w-28 h-28 bg-red-800">Cast</div>;
};

export default Cast;
