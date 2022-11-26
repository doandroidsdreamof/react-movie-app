const apiKey = process.env.API_KEY

const data = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&include_adult=false`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1&include_adult=false`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2&include_adult=false`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
  requestWeekTrending: ` https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&include_adult=false`,
  requestDayTrending: ` https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&include_adult=false`,
  requestGenre: ` https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`,
  requestSearch: ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`,
  requestExploreInitial: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=`,
  requestTopRatedSort: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=`,
  requestRecentSort: `  https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=`,
  requestPopularSort: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`,
  requestSortByGenre: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=`,
  requestDiscover:   `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=`,
  requestSearchByID: `api_key=${apiKey}&language=en-US`,
  requestSearchByIDSimilar: `api_key=${apiKey}&language=en-US&page=1`,
  requestVideo: `/videos?api_key=${apiKey}&language=en-US`,
  requestCast:`/credits?api_key=${apiKey}&language=en-US`,
  requestPeople: `api_key=${apiKey}&language=en-US&page=1&include_adult=false`,
  requestActor: `api_key=${apiKey}&language=en-US`,
  requestSearchMovie: `api_key=${apiKey}&language=en-US`,
  requestActorMovies: `api_key=${apiKey}&language=en-US`




};

export default data;

