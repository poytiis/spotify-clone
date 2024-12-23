import React, {useState} from 'react';
import './FriendsMusic.scss';
import backGround from '../../../imgs/icons/gray.jpg';
import Button from '../Button/Button';
import FindFriends from '../FindFriends/FindFriends';

const backGroundStyle = {
  backgroundImage: `url(${backGround})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const FriendsMusic = () => {

  const [showFindFriends, setShowFindFriends] = useState(false);

  function handleButtonClick() {
    setShowFindFriends(true);
  }

  function closeFindFriends() {
    setShowFindFriends(false);
  }
  return (
    <>
      <div className="friends-music flex-column-center" style={backGroundStyle}>

        <div className="friends-music__content-container">
          <span className="friends-music__text">Selvitä mitä kaverisi kuuntelevat</span>

          <Button type="black" handleClick={handleButtonClick}>Löydä kavereita</Button>
         

        </div>
      </div>

      {showFindFriends ? <FindFriends close={closeFindFriends}/> : null}
    </>
    
  );
}

export default FriendsMusic;