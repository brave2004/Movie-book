import SearchMovies from "./SearchMovies"
import FavouriteMovie from "./FavouriteMovie";
function FavouritesList(props){
    return (
        <div className="favourites-container">
            <h3>My Favourite Movies</h3>
            {props.favourites.length > 0 ? (
            <ul className="favourites-list">
                {props.favourites.map(movie=>(
                    <FavouriteMovie 
                        movie = {movie} 
                        removeFavourites={props.removeFavourites} 
                        showModal ={props.showModal} />
                ))}
            </ul>
            ) : (
                <p>You have no favourite movies yet. </p>
            )
}
        </div>
    )
}
export default FavouritesList;