import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const FeaturedMovie = ({movie}) => {

    return (
        <div className='featured--container'>
            <img className='featured--img' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
            <div className='featured--info'>
                <h3 className='featured--name'>{`${movie.name}`}</h3>
                <h3 className='featured--avg'>{`${movie.vote_average} ponto${movie.vote_average <= 1 ? '' : 's'}`}</h3>
                <h3 className='featured--release'>{`${movie.first_air_date.substring(0, 4)}`}</h3>
                <h3 className='featured--seasons'>{`${movie.number_of_seasons} temporadas`}</h3>
                <h3 className='featured--overview'>{`${movie.overview}`}</h3>
                <div className='buttons'>
                    <button className='watch--button'>
                        <FontAwesomeIcon className='play--icon' icon={faPlay} />
                        <span>Assistir</span>
                    </button>
                    <button className='mylist--button'>
                        <FontAwesomeIcon className='plus--icon' icon={faPlus} />
                        <span>Minha Lista</span>
                    </button>
                </div>
                <h3 className='genres'>{`Gêneros: ${movie.genres.map(genre => ` ${genre.name}`)}`}</h3>
            </div>
        </div>
    )
}

export default FeaturedMovie