import { ChangeEvent, useState } from "react"

interface UseInputprops {
  initValue?: string;
  type: string;
  placeholder?: string
}

const useInput = (props: UseInputprops) => {
  const [value, setValue] = useState(props.initValue || '');
  const [error, setError] = useState(false);

  return {
    value, 
    onChange: (e: ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)},
    error,
    type: props.type,
    placeholder: props.placeholder
  };
}

export default useInput;
export type UseInput = ReturnType<typeof useInput>;
