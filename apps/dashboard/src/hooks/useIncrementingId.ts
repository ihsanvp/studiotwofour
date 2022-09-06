import { useMemo } from "react";

function generator() {
  let lastId = -1;

  return () => {
    lastId += 1;
    return lastId;
  };
}

export default function useIncrementingId() {
  return useMemo(generator, []);
}
