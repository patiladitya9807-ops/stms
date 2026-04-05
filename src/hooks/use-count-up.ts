"use client";

import { useEffect, useState } from "react";

export function useCountUp(target: number, durationMs = 1200, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = performance.now();
    let frameId = 0;

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      const nextValue = Math.round(start + (target - start) * eased);
      setCount(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [durationMs, start, target]);

  return count;
}
