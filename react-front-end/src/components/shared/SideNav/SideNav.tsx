import{ useEffect, useState, useCallback } from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom';
import NewPlaylist from '../NewPLaylist/NewPlaylist';
import dots from '../../../imgs/icons/dots-more.png';
import home from '../../../imgs/icons/home.png';
import musicRecord from '../../../imgs/icons/music-record.png';
import radio from '../../../imgs/icons/radio-waves.png'
import add from '../../../imgs/icons/add-circular.png'
import { getUserPlaylistsAjax } from '../../../integration/httpClient';
import { RootState, useAppDispatch } from '../../../store/store';
import { setPLaylists } from '../../../store/slices/playlistSlice';
import { useSelector } from 'react-redux';

const SideNav = () => {
  const [showNewPlayList, setShowNewPlayList] = useState(false);
  const dispatch = useAppDispatch();
  const playlists = useSelector((state: RootState) => state.playlist.playlists);

  const fetchPlaylists = useCallback(async () => {
    const playlist = await getUserPlaylistsAjax();
    dispatch(setPLaylists(playlist));
  },[]);

  useEffect(() => {
    fetchPlaylists()
  }, []);

  const openNewPlayList = () => {
    setShowNewPlayList(true);
  }

  const closeNewPlayList = () => {
    setShowNewPlayList(false);
  }

  const saveAndCloseNewPlaylist = () => {
    setShowNewPlayList(false);
    fetchPlaylists();
  }

  const openPlaylist = (id: number) => {

  }

  const playlistsLists = playlists.map(item => {
    return <span className='side-nav__text' onClick={() => {openPlaylist(item.id)}}>
      {item.name}
    </span>
  });

  return (
    <div className="side-nav flex-column">
      <div className="side-nav__dots-container">
       <img src={dots} alt="dots"/>
      </div>

      <div className="flex-row-center side-nav__main-nav-tab-container">
        <img className="side-nav__image" src={home} alt="home"/>
        <Link to="/" className="side-nav__text">Koti</Link>
      </div>

      <div className="flex-row-center side-nav__main-nav-tab-container">
        <img className="side-nav__image" src={musicRecord} alt="music"/>
        <span className="side-nav__text">Browse</span>
      </div>

      <div className="flex-row-center side-nav__main-nav-tab-container">
        <img className="side-nav__image" src={radio} alt="radio waves"/>
        <span className="side-nav__text">Radio</span>
      </div>

      <div className="flex-column side-nav__second-nav-container">
        <span className="side-nav__header">oma kirjasto</span>

        <span className="side-nav__text">Luotu sinulle</span>
        <Link to="/viimeaikaiset" className="side-nav__text">Äskettäin soitetut</Link>
        <span className="side-nav__text">Tykätyt kappaleet</span>
        <span className="side-nav__text">Albumit</span>
        <span className="side-nav__text">Artistit</span>
        <span className="side-nav__text">Podcastit</span>
      </div>
  
      <div  className="flex-column">
        <span className="side-nav__header">Soittolistat</span>

        {playlistsLists}
      </div>

      <div className="side-nav__add-playlist-container">
        <div className="side-nav__add-playlist-text-container flex-row-center">
          <img className="side-nav__image side-nav__image--add" src={add} alt="add"/>
          <span className="side-nav__text" onClick={openNewPlayList}>Uusi soittolista</span>
        </div>
      </div>

      {showNewPlayList ? <NewPlaylist close={closeNewPlayList} saveAndClose={saveAndCloseNewPlaylist}/> : null}
    </div>
  );
}

export default SideNav;
