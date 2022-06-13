/* Modules */
import { useState, useEffect } from "react";

/* Components */
import Movies from "../components/movies";
import RetriveFetch from "../components/retriveFetch";
import LoadingSping from "../components/loading.spin";

/* Services */
import { getMovies } from "../services/movies.services";
import intentionalError from "../error/intentionalError";

export default function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (intentionalError()) {
      fetchMovies();
    } else {
      console.log("An error ocurred!");
      setLoading(false);
      setError("No fetching data!");
    }
  }, []);

  /* Function that fetch movies and set differents states */
  const fetchMovies = () => {
    getMovies()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        setError("Error fetching data!");
      });
  };

  /* RENDERS */

  // Loading
  if (loading) {
    return <LoadingSping />;
  }

  // Data fetched
  if (movies.length > 0) {
    return <Movies movies={movies} />;
  }

  // Intentional error
  return <RetriveFetch error={error} fetchMovies={fetchMovies} />;
}
