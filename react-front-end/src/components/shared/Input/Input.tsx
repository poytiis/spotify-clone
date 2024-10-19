import { ChangeEvent } from 'react';
import { UseInput } from '../../../hooks/useInput';
import './Input.scss';

interface InputProps {
  control: UseInput
}

const Input = (props: InputProps) => {
  return (
    <input
      className='input'
      placeholder={props.control.placeholder}
      type={props.control.type}
      value={props.control.value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => { props.control.onChange(e)} }
    />
  );
}

export default Input;
