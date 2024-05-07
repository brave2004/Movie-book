import logo from './logo.svg';
import './App.css';
import SearchMovies from './SearchMovies';
import FavouritesList from './FavouritesList';
import { useState } from 'react';
import MovieModal from './MovieModal';
import './style.css'

function App(){
  const [favourites, setFavourites] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  //function to collect the mvoie data and store in favourites
  const addFavourite = (movie) => {
    //setting up fresh array of fav, movie refers to new movie
    setFavourites([...favourites, movie])
  }

  const removeFavourites = (movie) =>{
    setFavourites(favourites.filter(f => f.imdbID !== movie.imdbID))
  }

  const showModal = (movie)=>{
    setSelectedMovie(movie)
    setIsModalOpen(true)
  } 

  const closeModal = () => {
    setSelectedMovie(null)
    setIsModalOpen(false)
  }

  console.log(favourites)
  return(
    <div className='App'>

      <SearchMovies addFavourite ={addFavourite} />
      <FavouritesList 
        favourites = {favourites} 
        removeFavourites = {removeFavourites} 
        showModal = {showModal} />
        { selectedMovie && (
        <MovieModal 
        isModalOpen={isModalOpen}
        movie={selectedMovie}
        closeModal={closeModal} />
)}
    </div>
  )
}

export default App;
