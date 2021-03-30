import {useEffect} from 'react'

export default function useKeydown(key, action) {
  useEffect(() => {
    function onKeydown(e) {
      if(e.key === key) action();
    };
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);
}
