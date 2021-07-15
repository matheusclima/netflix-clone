import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const FeaturedMovie = (props) => {

    return (
        <div className='featured--container'>
            <img className='featured--img' src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`} />
            <div className='featured--info'>
                <h3 className='featured--name'>{`${props.movie.name}`}</h3>
                <h3 className='featured--avg'>{`${props.movie.vote_average} ponto${props.movie.vote_average <= 1 ? '' : 's'}`}</h3>
                <h3 className='featured--release'>{`${props.movie.first_air_date.substring(0, 4)}`}</h3>
                <h3 className='featured--seasons'>{`${props.movie.number_of_seasons} temporadas`}</h3>
                <h3 className='featured--overview'>{`${props.movie.overview}`}</h3>
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
                <h3 className='genres'>{`Gêneros: ${props.movie.genres.map(genre => ` ${genre.name}`)}`}</h3>
            </div>
        </div>
    )
}

export default FeaturedMovie