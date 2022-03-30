import axios from "axios";
import { useEffect, useState, useRef } from "react";
import LaunchesData from "../../types/launches.type";

export default function LaunchesList() {
  const [lastElement, setLastElement] = useState<any>(null);
  const [offset, setOffset] = useState(0);
  const [launches, setLaunches] = useState<any[]>([]);
  const url = `https://api.spacexdata.com/v3/launches?limit=20&offset=${offset}`;

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setOffset((prev) => prev + 20);
      }
    })
  );
  const getLaunches = async () => {
    const response = await axios
      .get(url)
      .then((response) => response.data)
      .catch((err) => console.log(err));
    setLaunches((prev) => [...prev, ...response]);
  };
  useEffect(() => {
    if (offset <= launches.length) {
      getLaunches();
    }
  }, [offset]);
  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <div>
      {launches.map((launch, index) => {
        return (
          <div className="text-5xl" ref={setLastElement} key={index}>
            <div>{launch["flight_number"]}</div>
          </div>
        );
      })}
    </div>
  );
}
