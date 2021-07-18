import React, { useState, useEffect, componentDidMount } from 'react'
import Tmdb from '../services/Tmdb'
import Header from '../components/Header'
import MovieRow from '../components/MovieRow'
import FeaturedMovie from '../components/FeaturedMovie'
import './App.css'

export default function App() {

    const [movieList, setMovieList] = useState(false);
    const [background, setBackground] = useState(true);
    const [featuredMovie, setFeaturedMovie] = useState(false);

    useEffect(() => {
        async function loadAll() {
            let list = await Tmdb.getHomeList();
            let originals = await list[0].items.results
            let featured = await Math.floor(Math.random() * (originals.length + 1));
            let chosen = await Tmdb.getFeaturedMovie(originals[featured].id)
            console.log(list)
            setMovieList(list);
            setFeaturedMovie(chosen)
        }
        loadAll();
    }, []);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setBackground(false)
        } else {
            setBackground(true)
        }
    })

    
    return (
        <div id='netflix'>
            <Header background={background} />

            {featuredMovie &&
                <FeaturedMovie movie={featuredMovie}/> 
            }
        
            {movieList &&
            <div className='movie--lists'>
                {movieList.map(list => <MovieRow list={list}/>)}
            </div>
                
            } 
            
            {!movieList && !featuredMovie &&
                <div className='loading'>
                    <img src='https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif' alt='loading'/>
                </div>
            }
        </div>
    )
}