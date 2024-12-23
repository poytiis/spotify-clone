import { useEffect } from "react";

const useOutSideClick = (ref: React.RefObject<HTMLDivElement>, handleClick: () => void) => {
  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as any)) {
        handleClick()
      }
    }
    window.addEventListener('click', handleClickOutside);

    return () => {window.removeEventListener('click', handleClickOutside);};

  }, [ref, handleClick]);
}

export default useOutSideClick;
