import backgroundImg from '../../../imgs/background.jpg';
import './BackgroundImage.scss';

interface BackgroundImageProps {
  children: JSX.Element
}

const BackgroundImage = (props: BackgroundImageProps) => {
  const background = {
    backgroundImage:"url(" + backgroundImg + ")"
  };

  return (
    <div className='background-image ' style={background}>
      {props.children}
    </div>
  ); 
};

export default BackgroundImage;