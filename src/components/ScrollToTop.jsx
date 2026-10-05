import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef(new Map());

  useEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
      return;
    }

    const savedScrollY = scrollPositions.current.get(location.key) || 0;
    if (savedScrollY === 0) return;

    let timeoutId;
    let mutationObserver;
    let resizeObserver;

    function stopObserving() {
      mutationObserver?.disconnect();
      resizeObserver?.disconnect();
      window.clearTimeout(timeoutId);
    }

    function restoreScroll() {
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      window.scrollTo(0, Math.min(savedScrollY, maxScrollY));

      if (maxScrollY >= savedScrollY) stopObserving();
    }

    mutationObserver = new MutationObserver(restoreScroll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    resizeObserver = new ResizeObserver(restoreScroll);
    resizeObserver.observe(document.documentElement);
    timeoutId = window.setTimeout(stopObserving, 3000);
    restoreScroll();

    return stopObserving;
  }, [location.key, navigationType]);

  useEffect(() => {
    function saveScroll() {
      scrollPositions.current.set(location.key, window.scrollY);
    }

    window.addEventListener('scroll', saveScroll, { passive: true });
    return () => window.removeEventListener('scroll', saveScroll);
  }, [location.key]);

  return null;
}

export default ScrollToTop;