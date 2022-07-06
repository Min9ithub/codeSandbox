import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  return res.render("home", { pageTitle: "Movies!", movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movies = getMovieById(id);
  console.log(movies);
  return res.render("detail", { pageTitle: movies.title, movies });
};
export const filterMovie = (req, res) => {
  return res.render("filter");
};
