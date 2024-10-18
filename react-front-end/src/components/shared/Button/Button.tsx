import './Button.scss';

interface ButtonPros {
  type: string
  children: string
  handleClick: () => void
}

const Button = (props: ButtonPros) => {

    let buttonClass = 'button';

    if (props.type === 'black') {
        buttonClass = 'button button--black';
    } else if (props.type === 'green') {
      buttonClass = 'button button--green';
    } else if (props.type === 'blue') {
       buttonClass = 'button button--blue';
    }
  
    return (
      <button className={buttonClass}>{props.children}</button>
    );
  }
  
  export default Button;