import React, { useRef } from 'react';
import './Devices.scss';

import helpIcon from '../../icons/help.png';
import devicesIcon from '../../icons/devices.png';
import Button from '../Button/Button';

import useOutSideClick from '../../hooks/useOutSideClick';

const Devices = (props) => {

  function handleWindowClick() {
    props.close();
  }
  const ref = useRef();

  useOutSideClick(ref, handleWindowClick);
  
  return (
    <div className="devices flex-column-center" ref={ref}>
      <div className="devices__info-container flex-row">
        <img className="devices__info-icon" src={helpIcon} alt="help"/>
      </div>

      <div className="devices__text-container flex-column-center">
        <h4>Liitä laitteeseen</h4>
        <img src={devicesIcon} alt="devices"/>
        <span>Connect toiminnolla voit ohjata ja käyttää spotify laitteitasi</span>
        <span>Kun käynnistät Spotifyn toisesta laitteesta se tulee näkymään tähän</span>
        <div className="devices__button-container">
          <Button type="blue">Lisätietoja</Button>
        </div>
      
      </div>
     
    </div>
  );
}

export default Devices;