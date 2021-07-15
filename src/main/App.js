import React, { useState, useEffect, componentDidMount } from 'react'
import Tmdb from '../services/Tmdb'
import Header from '../components/Header'
import MovieRow from '../components/MovieRow'
import FeaturedMovie from '../components/FeaturedMovie'
import './App.css'

export default function App() {

    const [movieList, setMovieList] = useState(null);
    const [background, setBackground] = useState(true);
    const [featuredMovie, setFeaturedMovie] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadAll() {
            let list = await Tmdb.getHomeList();
            console.log(list)
            let originals = await list[0].items.results
            let featured = await Math.floor(Math.random() * (originals.length + 1));
            let chosen = await Tmdb.getFeaturedMovie(originals[featured].id)
            console.log(chosen)
            setMovieList(list);
            setFeaturedMovie(chosen)
            setLoading(false)
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
        loading ? 
        <div className='loading'>
        </div> :
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
        </div>
    )
}