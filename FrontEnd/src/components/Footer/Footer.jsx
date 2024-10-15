import React, {useState} from 'react';
import './Footer.scss';

import songImage from '../../icons/test.jpg'
import heart from '../../icons/heart.png';
import play from '../../icons/play.png';
// import pause from '../../icons/pause.png';
import shuffle from '../../icons/shuffle.png';
import back from '../../icons/back.png';
import next from '../../icons/next.png';
import repeat from '../../icons/repeat.png';
import queque from '../../icons/queque.png';
import speaker from '../../icons/speaker.png';
import volume from '../../icons/volume.png';
import expand from '../../icons/expand.png';

import Devices from '../Devices/Devices';
import Tooltip from '../Tooltip/Tooltip';

const Footer = () => {

  const [showDevices, setShowDevices] = useState(false);

  function closeDevices() {
    setShowDevices(false);
  }
  function openDevices () {
    setShowDevices(true);
  }
  return (
    <div className="footer flex-row-center">

     <div className="footer__song-container flex-row">
        <img className="footer__song-image" src={songImage} alt="song"/>
        <div className="flex-column footer__song-name-container">
        <div className="flex-row-center">
        <span className="footer__song-name">Mies yli laidan</span>
        <img className="footer__song-like-icon" src={heart} alt="heart"/>
        </div>
        
        <span className="footer__artist-name">Ruoska</span>
        </div>
     </div>

     <div className="footer__play-container flex-column-center">
       <div className="flex-row-center footer__play-button-container">

         <div className="footer__icon-shuffle-container">
            <img src={shuffle} alt="shuffle"/>
            <Tooltip type="bottom">Satunnaistoisto</Tooltip>
         </div>
         
          <div  className="footer__icon-back-container">
            <img src={back} alt="back"/>
            <Tooltip type="bottom">Edellinen</Tooltip>
          </div>
          

          <div className="footer__icon-play-container">
            <img className="footer__play-button" src={play} alt="play"/>
            <Tooltip type="bottom">Toista</Tooltip>
          </div>
          
          <div className="footer__icon-next-container">
            <img src={next} alt="next"/>
            <Tooltip type="bottom">Seuraava</Tooltip>
          </div>
          
          <div  className="footer__icon-repeat-container">
            <img src={repeat} alt="repeat"/>
            <Tooltip type="bottom">Toista uudelleen</Tooltip>
          </div>
         

       </div>

       <div className="flex-row-center">
          <span className="footer__play-time">0.00</span>
          <div className="footer__play-time-bar"></div>
          <span className="footer__play-time">3.23</span>
       </div>
     </div>

     <div className="flex-row-center footer__right-container">
       <div className="footer__icon-queque-container">
          <img className="footer__icon" src={queque} alt="queque"/>
          <Tooltip type="top">Näytä jono</Tooltip>
      </div>
       
       <div className="footer__devices-container footer__icon-devices-container">
          <img className="footer__icon" onClick={openDevices} src={speaker} alt="devices"/>
          {showDevices ? <Devices close={closeDevices}></Devices> : null}
          <Tooltip type="top">Käytettävissä olevat laitteet</Tooltip>
        
       </div>
       <div className="footer__icon-volume-container">
          <img className="footer__icon" src={volume} alt="volume"/>
          <Tooltip type="top">Mykistä</Tooltip>
       </div>
       
       <span className="footer__volume-bar"></span>
       <div className="footer__icon-expand-container">
          <img  className="footer__icon" src={expand} alt="expand"/>
          <Tooltip type="top--left">Näytä jono</Tooltip>
      </div>
      

     </div>

    </div>
  );
}

export default Footer;