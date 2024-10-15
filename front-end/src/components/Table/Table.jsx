import React from 'react';
import './Table.scss';

import calendarIcon from '../../icons/calendar.png';
import clockIcon from '../../icons/clock.png';
import playIcon from '../../icons/play.png';
import heartIcon from '../../icons/heart.png';

const Table = (props) => {

 const headerTypeClass = props.header === 'small' ? 'table__sticy-header' : ''; 
 console.log(headerTypeClass)
 const testDataEmpty =  new Array(30).fill(0);

 const testData = testDataEmpty.map((data, i) => 
  
    <tr key={i}>
      <td className="table__icon-column" ><img className="table__row-icon--large" src={playIcon} alt="play"/></td>
      <td className="table__icon-column"  ><img className="table__row-icon" src={heartIcon} alt="heart"/></td>
      <td >Digital world</td>
      <td>Amaranthe</td>
      <td>MASSIVE ADDICTIVE</td>
      <td>12.12.2000</td>
      <td>3.34</td>
  </tr>
   
 )
 console.log(testData);
 console.log(testDataEmpty)

  return (
    <div className="table__container">
      <table className="table">

        <thead>
          <tr>
            <th  className="table__icon-column"/>
            <th  className="table__icon-column"/>
            <th className="table__header-text table__name-column">NIMI</th>
            <th className="table__header-text table__artist-column">ARTISTI</th>
            <th className="table__header-text table__album-column">ALBUMI</th>
            <th className="table__date-column">
              <img className="table__header-icon" src={calendarIcon} alt="calendar"/>
            </th>
            <th className="table__time-column">
              <img className="table__header-icon" src={clockIcon} alt="clock"/>
            </th>
          </tr>

        </thead>

        <tbody>
          
          {testData}
        </tbody>
      </table>

      <div className= {"table__sticy " + headerTypeClass}>
        <span className="table__icon-column" ></span>
        <span className="table__icon-column--sticy" ></span>
        <span className="table__name-column" >Nimi</span>
        <span className="table__artist-column">ARTISTI</span>
        <span className="table__album-column">ALBUMI</span>
        <span className="table__date-column">
        <img className="table__header-icon " src={calendarIcon} alt="calendar"/>
        </span>
       
        <img className="table__header-icon table__time-column" src={clockIcon} alt="clock"/>

      </div>

    </div>
  );
}

export default Table;