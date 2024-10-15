import React, {useState} from 'react';
import './SideNav.scss'

import dots from '../../icons/dots-more.png';
import home from '../../icons/home.png';
import musicRecord from '../../icons/music-record.png';
import radio from '../../icons/radio-waves.png'
import add from '../../icons/add-circular.png'

import {Link} from 'react-router-dom';

import NewPlayList from '../NewPlayList/NewPlayList';

const SideNav = () => {

  const [showNewPlayList, setShowNewPlayList] = useState(false);

  function openNewPlayList() {
    setShowNewPlayList(true);
  }
  function closeNewPlayList() {
    setShowNewPlayList(false);
  }

  return (
    <div className="side-nav flex-column">
      <div className="side-nav__dots-container">
       <img src={dots} alt="dots"/>
      </div>

      <div className="flex-row-center side-nav__main-nav-tab-container">
        <img className="side-nav__image" src={home} alt="home"/>
        <Link to="/" className="side-nav__text">Koti</Link>
      </div>

      <div className="flex-row-center side-nav__main-nav-tab-container">
        <img className="side-nav__image" src={musicRecord} alt="music"/>
        <span className="side-nav__text">Browse</span>
      </div>

      <div className="flex-row-center side-nav__main-nav-tab-container">
        <img className="side-nav__image" src={radio} alt="radio waves"/>
        <span className="side-nav__text">Radio</span>
      </div>

      

      <div className="flex-column side-nav__second-nav-container">
        <span className="side-nav__header">oma kirjasto</span>

        <span className="side-nav__text">Luotu sinulle</span>
        <Link to="/viimeaikaiset" className="side-nav__text">Äskettäin soitetut</Link>
        <span className="side-nav__text">Tykätyt kappaleet</span>
        <span className="side-nav__text">Albumit</span>
        <span className="side-nav__text">Artistit</span>
        <span className="side-nav__text">Podcastit</span>
      </div>

      
      <div  className="flex-column">
        <span className="side-nav__header">Soittolistat</span>

        <span className="side-nav__text">Tykätty radiosta</span>
      </div>

      <div className="side-nav__add-playlist-container">
        <div className="side-nav__add-playlist-text-container flex-row-center">
          <img className="side-nav__image side-nav__image--add" src={add} alt="add"/>
          <span className="side-nav__text" onClick={openNewPlayList}>Uusi soittolista</span>
        </div>
      </div>


      {showNewPlayList ? <NewPlayList close={closeNewPlayList}/> : null}

    </div>
  );
}

export default SideNav;