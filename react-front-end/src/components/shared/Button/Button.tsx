import './Button.scss';

interface ButtonPros {
  type?: string
  children: string
  handleClick: () => void
}

const Button = (props: ButtonPros) => {
  let buttonClass = 'button';
  if(props.type) {
    const typeSplit = props.type.split('-');
    if(typeSplit.length > 0) {
      typeSplit.forEach(type => {
        buttonClass += ' button--' + type
      })
    }
  }

  return (
    <button className={buttonClass} onClick={() => {props.handleClick()}}>{props.children}</button>
  );
}
  
export default Button;
