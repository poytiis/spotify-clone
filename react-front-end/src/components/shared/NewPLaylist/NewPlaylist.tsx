import {useState, useEffect} from 'react';
import './NewPlaylist.scss';
import Button from '../Button/Button';
import closeIcon from './../../../imgs/icons/close.png';
import music from './../../../imgs/icons/music.png';

interface NewPLaylistProps {
  close: () => void;
}

const NewPlaylist = (props: NewPLaylistProps) => {

  const [opacity, setOpacity] = useState({});

  useEffect(() => {
    setOpacity({opacity: '1'});
  }, []);

  function close() {
    setOpacity({opacity: '0'});
    setTimeout(() => {props.close();}, 800)
  }


  return (
    <div className="new-play-list flex-column-center" style={opacity}>

      <div className="new-play-list__content flex-column-center" style={opacity}>
        <div className="flex-row-center new-play-list__close-button-container ">        
          <img onClick={close} className="new-play-list__close_button" src={closeIcon} alt="close"/>
        </div>
        <span className="new-play-list__header">Luo soittolista</span>
        
        <div className="flex-row new-play-list__main-content-container">
          <div className="new-play-list__outer-music-container flex-column-center">
            <div className="flex-column-center new-play-list__inner-music-container">            
              <img src={music} alt="music"/>
              <span className="flex-row new-play-list__music-text">Valitse kuva</span>    
            </div>
          </div>

          <div className="flex-column new-play-list__input-container">
            <span className="new-play-list__input-label">Nimi</span>
            <input className="new-play-list__input" placeholder="oma soittolista #2 " type="text"/>
            <span className="new-play-list__input-label" >kuvaus</span>
            <textarea className="new-play-list__textarea" placeholder="Anna soittolistallesi tarttuva kuvaus"></textarea>
          </div>
        </div>

        <Button type="green" handleClick={() => {}}>Luo</Button>
      </div>
    </div>
  );
}

export default NewPlaylist;
