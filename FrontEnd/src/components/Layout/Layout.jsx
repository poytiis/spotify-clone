import './Layout.scss';
import SideNav from './../SideNav/SideNav';
import FriendsMusic from './../FriendsMusic/FriendsMusic';
import Footer from './../Footer/Footer';
import MainContent from '../MainContent/MainContent';

const Layout = (props) => {
  return (
    <div className="layout">
      <Footer></Footer>
      <SideNav></SideNav>
      <FriendsMusic></FriendsMusic>
      <MainContent {...props}></MainContent>
    </div>
  );
}

export default Layout;
