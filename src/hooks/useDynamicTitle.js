import { useEffect, useRef } from 'react';

export default function useDynamicTitle(defaultTitle) {
  const intervalRef = useRef(null);

  useEffect(() => {
    const marqueeTitle = "Check me out! ";
    let i = 0;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        intervalRef.current = setInterval(() => {
          document.title = marqueeTitle.slice(i) + marqueeTitle.slice(0, i);
          i = (i + 1) % marqueeTitle.length;
        }, 200);
      } else {
        clearInterval(intervalRef.current);
        document.title = defaultTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(intervalRef.current);
    };
  }, [defaultTitle]);
}
