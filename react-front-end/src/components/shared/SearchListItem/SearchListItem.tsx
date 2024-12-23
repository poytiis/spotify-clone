import './SearchListItem.scss';
import albumImage from '../../../imgs/icons/test.jpg';
import closeIcon from './../../../imgs/icons/close.png';

interface SearchListItemProps {
  header: string;
  headerInfo: string;
  info: string;
}

const SearchListItem = (props: SearchListItemProps) => {
  return (
    <div  className="search-list-item flex-row-center">
      <div className="search-list-item__image-container">
        <img className="search-list-item__image" src={albumImage} alt=""/>
      </div>

      <div className="search-list-item__text-container flex-column">
        <span className="search-list-item__text--light">{props.header}</span>
        <span className="search-list-item__text">{props.headerInfo}</span>
        <span className="search-list-item__text--capital">{props.info}</span>
      </div>

      <div className="search-list-item__close-icon-container">
        <img className="search-list-item__close-icon" src={closeIcon} alt="close"/>
      </div>

    </div>
  );
}

export default SearchListItem;