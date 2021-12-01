// Initial Values
export const MOVIE_DB_API = process.env.REACT_APP_MOVIEDB_API_KEY;
export const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
export const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';


function generateMovieDBUrl(path) {
  const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
  return url;
}


export function getTopRatedMovies() {
  const url = generateMovieDBUrl(`/movie/top_rated`);
  return url
}

export function getTrendingMovies() {
  const url = generateMovieDBUrl('/trending/movie/day');
  return url
}


export function searchUpcomingMovies() {
  const url = generateMovieDBUrl('/movie/upcoming');
  return url
}

export function searchPopularMovie() {
  const url = generateMovieDBUrl('/movie/popular');
  return url
}

// Invoke a different export function for search movies
export function searchMovie(value) {
  const url = generateMovieDBUrl('/search/movie') + '&query=' + value;
  return url;
}


export function getVideosByMovieId(movieId) {
  const url = generateMovieDBUrl(`/movie/${movieId}/videos`);
  return url
}