import React, { useEffect, useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
export default function LaunchesList() {
  const [lastElement, setLastElement] = useState<any>(null);
  const { intersect, observer } = useInfiniteScroll();
  const [offset, setOffset] = useState(0);
  const url = `https://api.spacexdata.com/v3/launches?limit=20&offset=${offset}`;
  const { status, data } = useFetch(url);
  const [launches, setLaunches] = useState(data);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;
    setLaunches(data);
    if (currentElement) {
      currentObserver.observe(currentElement);
      setOffset((prev) => prev + 20);
      setLaunches(launches.concat(data));
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, []);
  function launchLink(id: number) {
    return `/launches/${id}`;
  }
  return (
    <div>
      {launches.map((launch, index) => {
        return (
          <div key={index} ref={setLastElement}>
            <p className="text-5xl">{launch["flight_number"]}</p>
          </div>
        );
      })}
    </div>
  );
}
