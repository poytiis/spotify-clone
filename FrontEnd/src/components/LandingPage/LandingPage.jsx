import backgroundImg from '../../imgs/background.jpg';
import spotifyLogo from '../../imgs/logo.png'
import './LandingPage.scss';

const LandingPage = () => {
  const background = {
    backgroundImage:"url(" + backgroundImg + ")"
  };

  return (
    <div className='landing' style={background}>
      <div className='landing__container'>
        <div className='landing__spotify-logo'>
          <img 
            className='landing__spotify-logo-img' 
            src={spotifyLogo} 
            alt='Spotify logo'
          />
          <p className='landing__spotify-logo-text'>Spotify</p>
        </div>

        <div className='landing__header-container'>
          <h1 className='landing__header-text'>Play any song, anytime, free.</h1>
        </div>
      </div>
     

    </div>
  );
}

export default LandingPage;