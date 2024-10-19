import './Button.scss';

interface ButtonPros {
  type?: string
  children: string
  handleClick: () => void
}

const Button = (props: ButtonPros) => {
  let buttonClass = props.type   
    ? 'button button--' + props.type
    : 'button';

  return (
    <button className={buttonClass} onClick={() => {props.handleClick()}}>{props.children}</button>
  );
}
  
export default Button;
