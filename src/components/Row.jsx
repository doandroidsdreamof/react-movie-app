import React from "react";
import Movie from "./Movie.jsx";
import { useEffect, useState } from "react";

const Row = ({ endpoint, title }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((get) => setMovies(get.results));
  }, [endpoint]);

  return (
    <>
      <div className="  max-w-fit mt-12">
        <h2 className="text-4xl text-white">{title}</h2>
        <div className="  flex flex-row justify-between space-x-6 mt-12">
          {movies.map((items, id) => (
            <Movie key={id} data={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
