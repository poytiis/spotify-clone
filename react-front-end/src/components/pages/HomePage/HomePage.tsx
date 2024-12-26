import './HomePage.scss';
import PlayBar from '../../shared/PlayBar/PlayBar';
import SideNav from '../../shared/SideNav/SideNav';
import FriendsMusic from '../../shared/FriendsMusic/FriendsMusic';
import MainContent from '../../shared/MainContent/MainContent';

const HomePage = () => {

  return(
    <div className='home-page'>
      <PlayBar/>
      <SideNav/>
      <FriendsMusic/>
      <MainContent/>
    </div>
  ); 
}

export default HomePage;
