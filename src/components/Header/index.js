import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Header = (props) => {

    return(
        <div className={props.background ? 'header transparent': 'header normal'}>
            <div className='menu left'>
                <img id='logo--img' src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png'></img>
                <ul>
                    <li id='start' style={{fontWeight: 'bold'}}><a>Início</a></li>
                    <li><a>Séries</a></li>
                    <li><a>Filmes</a></li>
                    <li><a>Bombando</a></li>
                    <li><a>Minha lista</a></li>
                </ul>
            </div>
            <div className='menu right'>
                <div className='search--container'>
                    <FontAwesomeIcon icon={faSearch} size='lg'/>
                    <input className='search--box' type='text' placeholder='Títulos, gente e gêneros...'/>
                </div>
                <a>INFANTIL</a>
                <div className='news--container'>
                    <FontAwesomeIcon className='bell--icon' icon={faBell} />
                </div>
                <img id='profile--img' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
            </div>
        </div>
    )
}

export default Header;