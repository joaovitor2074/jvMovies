import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import "./navbar.css"

const Navbar = () => {
  const [search,setsearch] = useState("")
  const navigate = useNavigate()

  const handlesubmit = (e)=>{
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setsearch("")

  }



  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/">
          <BiCameraMovie /> JvMovies
        </Link>
      </h2>

      <form onSubmit={handlesubmit} className="search-form">
        <input 
          type="text"  
          placeholder="Busque o filme"
          className="search-input"
          onChange={(e)=>setsearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="search-button">
          <BiSearchAlt2 />
        </button>
      </form>

    </nav>
  )
}

export default Navbar
