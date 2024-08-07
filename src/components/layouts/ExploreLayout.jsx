import React, { useEffect, useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import data from '../../../Data';
import SearchBar from '../aside-bar/SearchBar.jsx';
import GenresExplore from '../explore/GenresExplore.jsx';
import MovieExplore from '../explore/MovieExplore.jsx';
import SortInput from '../explore/SortInput.jsx';

function ExploreLayout(props) {
  const [initialMovies, setInitialMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [getData, setGetData] = useState(data.requestExploreInitial);
  const [genreQuery, setGenreQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${getData}${page}${genreQuery}`);
        const result = await response.json();
        setInitialMovies((prevMovies) => [...prevMovies, ...result.results]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [page, props.logic, getData, genreQuery]);

  const infiniteIncrease = useCallback(() => {
    setPage((prevPage) => (prevPage < 1000 ? prevPage + 1 : prevPage));
  }, []);

  const handleSortChange = useCallback((e) => {
    const inputValue = e.target.innerText;
    setInitialMovies([]);
    switch (inputValue) {
      case 'Top Rated':
        setGetData(data.requestTopRatedSort);
        break;
      case 'Most Popular':
        setGetData(data.requestPopularSort);
        break;
      case 'Most Recent':
        setGetData(data.requestRecentSort);
        break;
      default:
        break;
    }
  }, []);

  const handleGenresChange = useCallback((e) => {
    const genreId = e.target.id;
    setInitialMovies([]);
    setGenreQuery('');
    if (genreId === '1') {
      setGetData(data.requestPopularSort);
    } else {
      setGenreQuery(`&with_genres=${genreId}`);
      setGetData(data.requestSortByGenre);
    }
  }, []);

  return (
    <section className="flex flex-row bg-lm-bg dark:bg-bg-color">
      <div className="max-h-screen flex">{props.sideNav}</div>
      <div className="w-full max-h-screen bg-lm-bg dark:bg-bg-color">
        <div
          id="scrollableDiv"
          className="h-onehundred bg-lm-bg px-6 md:px-0 dark:bg-bg-color overflow-y-scroll flex flex-col gap-y-7"
        >
          <h1 className="bg-gradient-to-r mx-auto mt-3 from-star via-purple-400 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Explore Movies
          </h1>
          <SearchBar explorePage={props.logic} />
          <div className="flex flex-col mx-auto gap-y-3 md:flex-row justify-center md:gap-x-3">
            <SortInput onChange={handleSortChange} />
            <GenresExplore onChange={handleGenresChange} />
          </div>
          <InfiniteScroll
            dataLength={initialMovies.length}
            next={infiniteIncrease}
            hasMore
            loader={<h4 />}
            scrollableTarget="scrollableDiv"
          >
            <div className="items-center overflow-hidden gap-y-10 mt-12 order-3 h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:px-32 gap-5 px-7 md:px-10">
              {initialMovies?.map((el, id) => (
                <MovieExplore key={id} explore={el} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
}

export default ExploreLayout;
