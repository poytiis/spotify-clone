import backgroundImg from '../../../imgs/background.jpg';
import spotifyLogo from '../../../imgs/logo.png'
import Button from '../../shared/Button/Button';
import './LandingPage.scss';
import { useNavigate  } from 'react-router-dom';
import TextDecoration from '../../shared/TextDecoration/TextDecoration';
import {Link} from 'react-router-dom';
import SpotifyLogo from '../../shared/SpotifyLogo/SpotifyLogo';

const LandingPage = () => {
  const navigate = useNavigate();

  const background = {
    backgroundImage:"url(" + backgroundImg + ")"
  };

  return (
    <div className='landing' style={background}>
      <div className='landing__container'>
        <SpotifyLogo/>

        <div className='landing__header-container'>
          <h1 className='landing__header-text'>Play any song, anytime, free.</h1>
        </div>

        <Button 
          type='green' 
          handleClick={()=> navigate('/signup')}
        > 
          sign up free
        </Button>

        <TextDecoration width='304px'>ALREADY HAVE AN ACCOUNT?</TextDecoration>

        <div> 
          <Button type='white' handleClick={()=>navigate('/login')}> log in</Button>
        </div>

        <Link to='/test' className='landing__link'> SETTINGS</Link>
      </div>
    </div>
  );
}

export default LandingPage;
