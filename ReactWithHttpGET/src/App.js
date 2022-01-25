import React, {useCallback, useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(
    async () => {
      setIsLoading(true);
      setError(null)

      try{
        const response = await fetch('https://swapi.dev/api/films');

        if(!response.ok){
          throw new Error('Something went wrong')
        }

        const data = await response.json();

        const transformMovieData = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          }
        });
        setMovies(transformMovieData);

      }catch(error){
        setError(error.message)
      }

      setIsLoading(false);
    },
    [],
  );

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies...</p>}
        {!isLoading && error && <p>{error}</p> }
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
