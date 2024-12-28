import {useState, useEffect} from 'react';
import './NewPlaylist.scss';
import Button from '../Button/Button';
import closeIcon from './../../../imgs/icons/close.png';
import music from './../../../imgs/icons/music.png';
import useInput from '../../../hooks/useInput';
import Input from '../Input/Input';
import { createPlaylistAjax } from '../../../integration/httpClient';

interface NewPLaylistProps {
  close: () => void;
  saveAndClose: () => void;
}

const NewPlaylist = (props: NewPLaylistProps) => {
  const [opacity, setOpacity] = useState({});
  const nameControl = useInput({type: 'text', placeholder: 'Luo soittolista'});
  const [textAreaContent, setTextAreaContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setOpacity({opacity: '1'});
  }, []);

  const close = () => {
    setOpacity({opacity: '0'});
    setTimeout(() => {props.close();}, 800)
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaContent(event.target.value);
  }

  const handleCreateNewPlaylist = async  () => {
    const body = {
      name: nameControl.value,
      description: textAreaContent
    };

    try {
      await createPlaylistAjax(body);
      setErrorMessage('');
      close()
      props.saveAndClose()
    } catch(ex) {
      setErrorMessage('Soittolistan luominen epäonnistui')
    }  
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
            <Input control={nameControl} className='input__new-playlist'/>
            <span className="new-play-list__input-label" >kuvaus</span>
            <textarea 
              value={textAreaContent}
              onChange={handleTextAreaChange}
              className="new-play-list__textarea" 
              placeholder="Anna soittolistallesi tarttuva kuvaus"
            />
          </div>
        </div>

        <Button type="green" handleClick={handleCreateNewPlaylist}>Luo</Button>
        <div className='new-play-list__error-message'>{errorMessage}</div>
      </div>
    </div>
  );
}

export default NewPlaylist;
