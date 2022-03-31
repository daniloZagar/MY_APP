import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LaunchesItem from "./LaunchesItem";

export default function LaunchesList() {
  const [lastElement, setLastElement] = useState<any>(null);
  const [offset, setOffset] = useState(0);
  const [launches, setLaunches] = useState<any[]>([]);
  const url = `${process.env.REACT_APP_BASE_URL}?limit=20&offset=${offset}`;

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setOffset((prev) => prev + 20);
      }
    })
  );
  const getLaunches = async () => {
    try {
      const response = await axios
        .get(url)
        .then((response) => {
          return response.data;
        })
        .catch((err) => console.log(err));
      setLaunches((prev) => [...prev, ...response]);
    } catch (err) {
      console.log(err);
    }
  };
  const showLaunch = (id: number) => {
    return `/launches/${id}`;
  };
  useEffect(() => {
    if (offset <= launches.length) {
      getLaunches();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {launches.map((launch) => {
        return (
          <div key={launch.flight_number}>
            <Link to={showLaunch(launch.flight_number)} ref={setLastElement}>
              <LaunchesItem
                flight_number={launch.flight_number}
                mission_name={launch.mission_name}
                links={launch.links.mission_patch_small}
                launch_year={launch.launch_year}
              ></LaunchesItem>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
