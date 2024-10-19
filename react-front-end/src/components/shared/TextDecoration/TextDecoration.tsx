import './TextDecoration.scss';

interface  TextDecorationProps {
  width?: string;
  children: string
}

const TextDecoration = (props: TextDecorationProps) => {
  return (
    <div className='text-decoration' style={{width:props.width}}>
      <hr/>
      <p>{props.children}</p>
      <hr/>
    </div>
  );
}

export default TextDecoration;
