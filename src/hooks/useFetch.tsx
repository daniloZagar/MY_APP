import { useEffect, useState } from "react";
import axios from "axios";

const cache: any = {};
const useFetch = (url: string) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      if (cache[url]) {
        const data = cache[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data;
        setData(data);
        setStatus("fetched");
      }
    };

    fetchData();
  }, [url]);
  console.log(data);
  return { status, data };
};

export default useFetch;
