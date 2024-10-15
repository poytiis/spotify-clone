import React from 'react';
import './Button.scss';

const Button = (props) => {

  if (props.type === 'black') {
    return <button className="button button--black" {...props}>{props.children}</button>
  } else if (props.type === 'green') {
    return <button className="button button--green" {...props}>{props.children}</button>
  } else if (props.type === 'blue') {
    return <button className="button button--blue" {...props}>{props.children}</button>
  }

  return (
    <button className="button" {...props}>{props.children}</button>
  );
}

export default Button;