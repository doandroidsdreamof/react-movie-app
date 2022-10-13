import React from "react";
import { useParams,Link } from "react-router-dom";
import data from "../../../Data";
import { useState, useEffect } from "react";
import fallBack from "../../assets/image/fallback-image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";



const Cast = () => {
  let { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [bio, setBio] = useState([]);

  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/`;
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(baseUrl + data.requestCast)
      .then((res) => res.json())
      .then((get) => setCasts(get.cast))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <>
      {casts.map((actor, i) => (
 <Link to={`/actor/${actor.id}`} className="flex items-center relative bg-card-second p-3 w-full  rounded-lg overflow-hidden shadow  cursor-pointer duration-200 ease-in hover:animate-pulse ">
 <LazyLoadImage key={i} className="lg:w-16 lg:h-16  md:w-12 md:h-12  w-8 h-8  rounded-full object-cover bg-gray-100 text-[10px] text-center flex justify-center" src={actor.profile_path ? `${imagePath}${actor?.profile_path}` : fallBack  } alt={actor?.original_name}/>
 <div className="ml-3">
   <p className="font-medium text-gray-100">{actor?.original_name}</p>
   <p className="text-sm text-gray-400   line-clamp-1">Character name {actor?.character.length > 20 ? actor?.character.substring(0, 20) + "..." : actor?.character}</p>
 </div>
 </Link>

      ))}
    </>
  );
};

export default Cast;

/*
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
*/
