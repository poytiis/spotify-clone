import React, {useEffect, useState} from 'react';
import './FindFriends.scss';
import closeIcon from '../../icons/close.png';
import Button from './../Button/Button';

const FindFriends = (props) => {

  const [opacity, setOpacity] = useState({});

  useEffect(() => {
    setOpacity({opacity: '1'});
  }, []);
 
  function close() {
    setOpacity({opacity: '0'});
    setTimeout(() => {props.close();}, 800)
  }

  return (
    <div className="find-friends flex-column-center" style={opacity}>

    <div className="find-friends__content flex-column" style={opacity}>

      <div className="find-friends__close-button-container flex-row">
        <img className="find-friends__close-button" src={closeIcon} alt="close" onClick={close}/>
      </div>
      <div>
        <span className="find-friends__text find-friends__text--xl-large">Seuraa</span>
      </div>

      <div className="find-friends__text-container flex-column-center">
        <span className="find-friends__text find-friends__text--large">Katso, mitä kaverisi kuuntelevat</span>
        <Button type="blue">linkitä Facebookiin</Button>
        <span className="find-friends__text find-friends__text--small">Emme julkaise mitään ilman suostumusta</span>
      </div>

    </div>

    </div>
  );
}

export default FindFriends;