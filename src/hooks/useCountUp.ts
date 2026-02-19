import { useState, useEffect, useRef, useCallback } from 'react';

export function useCountUp(
  end: number,
  duration: number = 2000,
  startOnMount: boolean = false
) {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    startTimeRef.current = null;
  }, [isRunning]);

  useEffect(() => {
    if (startOnMount) {
      start();
    }
  }, [startOnMount, start]);

  useEffect(() => {
    if (!isRunning) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsRunning(false);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isRunning, end, duration]);

  return { count, start };
}
