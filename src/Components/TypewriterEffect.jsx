import React, { useState, useEffect, useCallback, useMemo } from 'react';

export const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);

  const words = useMemo(() => ['Frontend Developer', 'Web Developer'], []); // Memoize words
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prevLoopNum => prevLoopNum + 1);
      setDelta(100);
    }
  }, [text, isDeleting, loopNum, words, period]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return <span className="typewriter">{text}</span>;
};
