import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'


const MovieRow = ({list}) => {
    
    const [scrollX, setScrollX] = useState(0)

    const rollLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 1.5);
        console.log(x)
        if( x > 0 ){
            x = 0; 
        }
  
        setScrollX(x);
    }

    const rollRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 1.5);
        let width = document.getElementById(list.slug).getBoundingClientRect().width
        console.log(x)
        if( x < window.innerWidth - width) {
            x = window.innerWidth - width - 50;
        }
        setScrollX(x)
            
    }

    return (
        <div className='row--header'>
            <span>{list.title}</span>

            <div className='row--imgs'>
                <div className='left--arrow' onClick={(e) => rollLeft()}> <FontAwesomeIcon icon={faChevronLeft} /> </div>
                <div className='right--arrow' onClick={(e) => rollRight()}> <FontAwesomeIcon icon={faChevronRight} /></div>
                <div className='list' id={list.slug} style={{
                    marginLeft: scrollX 
                }}>
                    {list.items.results.map((movie, key) =>
                        <div key={key} className='movie--poster'>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieRow;