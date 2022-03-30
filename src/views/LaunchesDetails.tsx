import { useFetch, TApiResponse } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

export default function LaunchesDetails() {
  const location = useLocation().pathname.slice(10);

  const data: TApiResponse = useFetch(
    `${process.env.REACT_APP_BASE_URL}/${location}`
  );
  console.log(data.data);

  return (
    <div>
      <div></div>
    </div>
  );
}
