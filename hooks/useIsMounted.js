import { useRef, useEffect } from 'react';

export const useIsMounted = () => {
  const mounted = useRef(true);
  const isMounted = useRef(() => mounted.current);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return isMounted.current;
};
