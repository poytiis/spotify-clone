import React from 'react';
import './GridItem.scss';

import playIcon from '../../icons/play.png';

import songImage from '../../icons/test.jpg';
import heartIcon from '../../icons/heart.png';
import moreIcon from '../../icons/dots-more.png';

const GridItem = (props) => {

  const typeClass = props.type ==='circular' ? 'grid-item--circular': '';

  return (
    <div className="grid-item ">

      <div className="grid-item__image-container">

        <img className={"grid-item__image " + typeClass} src={songImage} alt="song"/>

        <div className={"grid-item__hover-image-container flex-row-center " + typeClass}>

          <div className="grid-item__hover-icon-container flex-row-center">
            <img src={heartIcon} alt="heart"/>
            <img src={playIcon} alt="play"/>
            <img src={moreIcon} alt="more"/>

          </div>
          
        </div>

      </div>

      <div className={"grid-item__text-container flex-column " + typeClass}>
        <span className="grid-item__text--light">Come clarity</span>
        <span className="grid-item__text">In flames</span>
        <span className="grid-item__text--capital grid-item__text">ALBUMI</span>
      </div>


    </div>
  );
}

export default GridItem;