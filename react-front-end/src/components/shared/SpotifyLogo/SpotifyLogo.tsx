import spotifyLogo from '../../../imgs/logo.png';
import './SpotifyLogo.scss';

const SpotifyLogo = () => {
  return (
    <div className='spotify-logo'>
      <img 
        className='spotify-logo__img' 
        src={spotifyLogo} 
        alt='Spotify logo'
      />
      <p className='spotify-logo__text'>Spotify</p>
    </div>
  );
}

export default SpotifyLogo;