import React from 'react';
import './MainContent.scss';
import Header from '../Header/Header';
import Table from '../Table/Table';
import {useState, useRef}  from 'react';
import GridView from '../GridView/GridView';
import SearchList from '../SearchList/SearchList';

const MainContent = (props) => {

 
  const [showLargeHeader, setShowLargeHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const contentRef = useRef();

  const headerType = showLargeHeader ? 'large' : 'small';

  let mainContent = '';
  if(props.component === 'lastPlayed') {
    mainContent = <GridView></GridView>;
  } else if (props.component === 'searchList') {
    mainContent = <SearchList></SearchList>;
  } else {
    mainContent = <Table header={headerType}></Table>;
  }



  function handleScroll (e) {

    if (contentRef.current.scrollTop > 100 && showLargeHeader) {
      setShowLargeHeader(false);
    } else if (contentRef.current.scrollTop < 100 && !showLargeHeader) {
      setShowLargeHeader(true);
    }

    if (contentRef.current.scrollTop > 0 && !scrolled) {
      setScrolled(true);  
    } else if (contentRef.current.scrollTop === 0  && scrolled) {
      setScrolled(false);
    }


    
  }

 
  return (
    <div className="main-content" onScroll={handleScroll} ref={contentRef}>
      <Header type={headerType} scrolled={scrolled}></Header>

      <div className="main">
        {mainContent}
      </div>
    </div>
  );
}

export default MainContent;