import React from 'react';
import './Tooltip.scss';

const Tooltip = (props) => {
  return (
    <span className={"tooltip tooltip__" + props.type }>{props.children}</span>  
  );
}

export default Tooltip;
