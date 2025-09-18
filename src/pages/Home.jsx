import { useState, useEffect } from "react"
import MovieCard from "../components/movieCard"
import styles from "../pages/moviegrid.module.css"


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const gettopRateMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRateUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
        gettopRateMovies(topRateUrl);
    }, []);


    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.homeTitle}>Melhores filmes:</h2>
            <div className={styles.moviesGrid}>
                {topMovies.length === 0 && <p className={styles.loadingText}>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>


    )
}








export default Home