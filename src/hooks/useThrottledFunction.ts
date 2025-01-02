import throttle from 'lodash/throttle';
import { useMemo } from 'react';

export const useThrottledFunction = (callback, delay) => {
  return useMemo(() => throttle(callback, delay), [callback, delay]);
};
