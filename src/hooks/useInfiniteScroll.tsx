import { useState, useRef } from "react";

export default function useInfiniteScroll() {
  const [intersect, setIntersect] = useState(false);
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setIntersect(true);
      }
    })
  );
  return { intersect, observer };
}
