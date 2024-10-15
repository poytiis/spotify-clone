import React from 'react';
import './Header.scss';

import user from '../../icons/person-white.png';
import arrow from '../../icons/expand-arrow.png';
import search from '../../icons/search.png';
import albumImage from '../../icons/test.jpg';
import heart from '../../icons/heart-circular.png';
import more from '../../icons/dots-more-circular.png';

import Button from '../Button/Button';
import { useHistory } from "react-router-dom";


const inputIconStyle =  {
  backgroundImage: `url(${search})`,
}

const Header = (props) => {

  let history = useHistory();

  function handleSearchFocus() {
    console.log('sdlkjsfd');
    const url = window.location.pathname;

    if (url !== "haut") {
      history.push('/haut');
    }
  }

  const headerClass = props.scrolled ? "header__fixed--black" : "";
  console.log(headerClass)
  if (props.type === 'large') {
    return (
    <div className="header--large">

      <div className={"flex-row-center header__fixed  " + headerClass}>
        <input style={inputIconStyle} className="header__input" type="text" placeholder="Hae" onFocus={handleSearchFocus} />

        <div className="header__user-container flex-row-center">
          <img className="header__user-icon" src={user} alt="user"/>
          <span className="header__text header__username">Teemu Pöytäniemi</span>
          <div className="header__dropdown-container">
            <img src={arrow} alt="arrow"/>
            <div className="header__dropdown flex-column">
              
              <span className="header__text--dropdown">Yksityinen istunto</span>
              <span className="header__text--dropdown">Tili</span>
              <span className="header__text--dropdown">Asetukset</span>
              <span className="header__text--dropdown">Kirjaudu ulos</span>

            </div>
          </div>
        </div>
      </div>

      <div className="header__second-row flex-row">
        <div>
          <img className="header__album-image--large" src={albumImage} alt="album"/>
        </div>
        <div className="flex-column large-header__album-info-container">
          <span className="large-header__text">ALBUMI</span>
          <span className="large-header__text large-header__text--large">Wolves</span>
          <span className="large-header__text">tekijältä <span className="large-header__text--bold">Deadlock</span></span>
          <span className="large-header__text">2011, 11kappaletta, 46min</span>

          <div className="flex-row">
            <Button type="green">toista</Button>
            <img className="header__heart-icon" src={heart} alt="heart"/>
            <img className="header__more-icon"src={more} alt="more"/>
          </div>

        </div>
      </div>

    </div>
    
    
    );
  }

  return (
    <div className="header header__sticy">
      <div className="flex-row-center">
        <input style={inputIconStyle} className="header__input" type="text" placeholder="Hae"/>

        <div className="header__user-container flex-row-center">
          <img className="header__user-icon" src={user} alt="user"/>
          <span className="header__text header__username">Teemu Pöytäniemi</span>
          <div className="header__dropdown-container">
            <img src={arrow} alt="arrow"/>
            <div className="header__dropdown flex-column">

              <span className="header__text--dropdown">Yksityinen istunto</span>
              <span className="header__text--dropdown">Tili</span>
              <span className="header__text--dropdown">Asetukset</span>
              <span className="header__text--dropdown">Kirjaudu ulos</span>

            </div>
          </div>
         
        </div>
      </div>

      <div className="flex-row-center">

        <img className="header__album-image" src={albumImage} alt="album"/>
        <span className="header__text header__album-name" >In flames</span>

        <div className="header__button-container flex-row-center">
          <Button type="green">tauko</Button>
          <img className="header__heart-icon" src={heart} alt="heart"/>
          <img className="header__more-icon" src={more} alt="more"/>

        </div>

      </div>
    </div>
  );

}

export default Header;