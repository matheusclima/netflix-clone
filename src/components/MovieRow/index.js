import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './style.css'


const MovieRow = ({list}) => {
    
    const rollLeft = (event) => {
        let row = document.getElementById(list.slug);
        let actualPos = row.scrollLeft;
        let step = 1020;

        let scrollTimer = setInterval(()=>{
            if(row.scrollLeft > actualPos - step && row.scrollLeft > 30) {
                row.scrollLeft -= 70
            } else {
                console.log('Parou')
                clearInterval(scrollTimer)
            }
        console.log()
        }, 24)

    }

    const rollRight = (event) => {
        let row = document.getElementById(list.slug);
        let actualPos = row.scrollLeft;
        let width = row.getBoundingClientRect().width
        let listWidth = list.items.results.length * 170;
        let step = 1020;

        let scrollTimer = setInterval(()=>{
            if(row.scrollLeft < actualPos + step && row.scrollLeft + width < listWidth) {
                console.log(row.scrollLeft)
                row.scrollLeft += 70
            } else {
                console.log('Parou')
                clearInterval(scrollTimer)
            }
            
        }, 24)
            
    }

    return (
        <div className='row--header'>
            <span>{list.title}</span>

            <div className='row--imgs'>
                <div className='left--arrow' onClick={(e) => rollLeft(e.target)}> <FontAwesomeIcon icon={faChevronLeft} /> </div>
                <div className='right--arrow' onClick={(e) => rollRight(e.target)}> <FontAwesomeIcon icon={faChevronRight} /></div>
                <div className='list' id={list.slug} style={{
            
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