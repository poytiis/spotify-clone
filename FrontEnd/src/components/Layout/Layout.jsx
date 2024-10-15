import React from 'react';
import './Layout.scss';
import SideNav from './../SideNav/SideNav';
import FriendsMusic from './../FriendsMusic/FriendsMusic';
import Footer from './../Footer/Footer';
// import NewPlayList from './../NewPlayList/NewPlayList';
import MainContent from '../MainContent/MainContent';

const Layout = (props) => {
  return (
    <div className="layout">
      <Footer></Footer>
      <SideNav></SideNav>
      <FriendsMusic></FriendsMusic>
      <MainContent {...props}></MainContent>
      {/* <NewPlayList></NewPlayList> */}
    </div>
  );
}

export default Layout;