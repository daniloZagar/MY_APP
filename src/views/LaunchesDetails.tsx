import { useFetch, TApiResponse } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

export default function LaunchesDetails() {
  const location = useLocation().pathname.slice(10);
  console.log(`${process.env.REACT_APP_BASE_URL}/${location}`);

  const data: TApiResponse = useFetch(
    `${process.env.REACT_APP_BASE_URL}/${location}`
  );
  console.log(data);
  return (
    <div className="flex flex-col items-center p-20 gap-y-6">
      <p className="text-2xl font-semibold font-roboto">
        Flight Number: {data?.data?.flight_number}
      </p>
      <p className="text-2xl font-semibold font-roboto">
        Mission Name: {data?.data?.mission_name}
      </p>
      <p className="text-2xl font-semibold font-roboto">
        Launch Year: {data?.data?.launch_year}
      </p>
      <img
        className="w-44 h-auto"
        src={data?.data?.links.mission_patch_small}
        alt="rocket"
      />
    </div>
  );
}
