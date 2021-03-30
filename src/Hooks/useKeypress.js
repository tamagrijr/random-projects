import {useEffect} from 'react'

export default function useKeypress(key, action) {
  useEffect(() => {
    function onKeypress(e) {
      if(e.key === key) action();
    };
    document.addEventListener('keypress', onKeypress);
    return () => document.removeEventListener('keypress', onKeypress);
  }, []);
}
