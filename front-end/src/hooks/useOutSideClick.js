import {useEffect} from 'react';

// Hook that handle click events outside of the cpomponent
// Params
// ref, ref is created by useRef and given to <Component ref={ref}>
// func, callback function when clicked outside of the component
const useOutSideClick = (ref, func) => {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        func()
      }
    }
    window.addEventListener('click', handleClickOutside);

    return () => {window.removeEventListener('click', handleClickOutside);};

  }, [ref, func]);
}

export default useOutSideClick;
