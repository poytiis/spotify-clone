import './LogIn.scss';
import BackgroundImage from '../../shared/BackgroundImage/BackgroundImage';
import TextDecoration from '../../shared/TextDecoration/TextDecoration';
import SpotifyLogo from '../../shared/SpotifyLogo/SpotifyLogo';
import Button from '../../shared/Button/Button';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import Input from '../../shared/Input/Input';
import { logInAJAX } from '../../../integration/httpClient';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { useState } from 'react';

const LogIn = () => {
  const emailControl = useInput({type: 'text', placeholder: 'email'});
  const passwordControl = useInput({type: 'password', placeholder: 'password'});
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const handleUnauthorized = () => {
    setError('Invalid credentials')
  };

  const handleLogIn = async () => {
    try {
      const user = await logInAJAX(emailControl.value, passwordControl.value, handleUnauthorized);
      if (user) {
        dispatch(setUser(user))
        setError('')
      }
    } catch (err) {
      setError('Unknown error!')
    }
    
  };

  return (
    <BackgroundImage>
      <div className='login'>
        <SpotifyLogo/>

        <Button type='blue' handleClick={() => {}}>Log in with Facebook</Button>
        <div className='login__decoration-container'>
          <TextDecoration>OR</TextDecoration>
        </div>
        
        <Input control={emailControl} />
        <Input control={passwordControl} />
        <div className='login__login-button-container'>
          <Button type='green' handleClick={handleLogIn}>Log in</Button>
        </div>

        <div className='login__error-message'>{error}</div>
       
        <Link to='/' className='login__link'>HOME</Link>
      </div>
    </BackgroundImage>
  );
};

export default LogIn;