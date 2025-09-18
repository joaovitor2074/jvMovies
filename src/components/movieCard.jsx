import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import styles from "./moviecard.module.css"

const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className={styles.movieCard}>
        <img src={imageURL + movie.poster_path} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>

        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard
