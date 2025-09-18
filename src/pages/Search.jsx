import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/movieCard"
import styles from "./moviegrid.module.css"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchparams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchparams.get("q")

  const getSearchMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    if (!query) return
    const SearchWithQueryUrl = `${searchURL}?api_key=${apiKey}&query=${query}`
    getSearchMovies(SearchWithQueryUrl)
  }, [query])

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.homeTitle}>
        Resultados para: <span>{query}</span>
      </h2>
      <div className={styles.moviesGrid}>
        {movies.length === 0 && <p className={styles.loadingText}>Nenhum resultado encontrado...</p>}
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Search
