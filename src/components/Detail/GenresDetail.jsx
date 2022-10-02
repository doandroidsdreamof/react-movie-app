import React from "react";
import { useEffect, useState } from "react";

const GenresDetail = ({ genresList }) => {
  const [name, setName] = useState([]);
  useEffect(() => {
    let c = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`;

    x();
  }, []);

  function x() {
    let parseGenre = [];
    for (let i in genresList.genres) {
      parseGenre.push(genresList.genres[i].name);
    }
    setName(parseGenre);
  }

  console.log(name);

  return (
    <>
      {name.map((items, index) => (
        <>
          <button className="hover:bg-black hover:text-white bg-transparent py-2 w-fit z-50 mt-0 order-3   ml-8 bottom-4 relative transition ease-in duration-200 uppercase px-8  font-semibold border rounded  ">
            {items}
            </button>;
        </>
      ))}
    </>
  );
};

export default GenresDetail;
