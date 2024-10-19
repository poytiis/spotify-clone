import { Link } from 'react-router-dom';
import BackgroundImage from '../../shared/BackgroundImage/BackgroundImage';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';
import SpotifyLogo from '../../shared/SpotifyLogo/SpotifyLogo';
import TextDecoration from '../../shared/TextDecoration/TextDecoration';
import './SignUp.scss';
import useInput from '../../../hooks/useInput';

const SignUp = () => {
  const emailControl = useInput({type: 'text', placeholder: 'email'});
  const firsNameControl = useInput({type: 'text', placeholder: 'first name'});
  const lastNameControl = useInput({type: 'text', placeholder: 'last name'});
  const passwordControl = useInput({type: 'password', placeholder: 'password'});
  const repeatPasswordControl = useInput({type: 'password', placeholder: 'repeat password'});
  return (
    <BackgroundImage>
      <div className='sign-up'>
        <SpotifyLogo/>

        <Button type='blue' handleClick={() => {}}>Sign up with Facebook</Button>
        <div className='sign-up__decoration-container'>
          <TextDecoration>OR</TextDecoration>
        </div>
        
        <Input control={emailControl} />
        <Input control={firsNameControl} />
        <Input control={lastNameControl} />
        <Input control={passwordControl} />
        <Input control={repeatPasswordControl} />
        <div className='sign-up__login-button-container'>
          <Button type='green' handleClick={() => {}}>Sign up</Button>
        </div>
      
        <Link to='/' className='sign-up__link'> HOME</Link>
      </div>
    </BackgroundImage>
  );
};

export default SignUp;