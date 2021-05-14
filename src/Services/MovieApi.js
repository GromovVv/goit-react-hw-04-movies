import Axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '7e78d9d0b80a5a9938ce5aba09bf2c47';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

export async function fetchMovies() {
  const response = await Axios.get(
    `${BASE_URL}/trending/all/day?api_key=${KEY}`,
  );

  return response.data.results;
}

export async function searchMovies(query) {
  const response = await Axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`,
  );
  return response.data.results;
}

export async function fetchMovieById(id) {
  const response = await Axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
  return response.data;
};

export async function fetchMovieCast(id) {
  const response = await Axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`,
  );
  return response.data.cast;
};

export async function fetchMovieReviews(id) {
  const response = await Axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`,
  );
  return response.data.results;
}
