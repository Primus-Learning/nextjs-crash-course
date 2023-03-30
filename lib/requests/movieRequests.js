import { options } from ".";

// GET opening movies
export const getOpeningMovies = async () => {
  const res = await fetch(
    `https://${process.env.RapidAPIHost}/movies/get-opening`,
    options
  );

  const rawData = await res.json();
  const data = rawData?.data?.opening.splice(0, 10);
  return data;
};

// GET popular movies
export const getPopularMovies = async () => {
  const res = await fetch(
    `https://${process.env.RapidAPIHost}/movies/get-popularity`,
    options
  );

  const rawData = await res.json();
  const data = rawData?.data?.popularity?.splice(0, 10);
  return data;
};

// GET movie's detail by ID
export const getMovieByID = async (id) => {
  const res = await fetch(
    `https://${process.env.RapidAPIHost}/movies/detail?emsVersionId=${id}`,
    options
  );

  const data = await res.json();
  return data;
};

// GET search results for queried movie
export const searchMovie = async (term) => {
  const res = await fetch(
    `https://${process.env.RapidAPIHost}/search?query=${term}`,
    options
  );

  const data = await res.json();
  return data;
};

