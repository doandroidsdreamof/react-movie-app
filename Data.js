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
  requestSearchByID: `api_key=${apiKey}&language=en-US`,
  requestSearchByIDSimilar: `api_key=${apiKey}&language=en-US&page=1`
};

export default data;

