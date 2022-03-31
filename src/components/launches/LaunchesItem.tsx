import React from "react";
import ILaunchesData from "../../types/launches.type";

export default function LaunchesItem(props: ILaunchesData) {
  const image = props.links.toString();
  return (
    <div className="p-5">
      <div className="flex border-solid border-2 border-black justify-center items-center p-5">
        <img src={image} alt="rocket" />
      </div>
      <div className="bg-black p-5 flex justify-center items-center">
        <div>
          <p className="text-2xl text-white text-bold font-roboto">
            Flight Number: <span>{props.flight_number}</span>
          </p>
          <p className="text-2xl text-white text-bold font-roboto">
            Mission Name: <span>{props.mission_name}</span>
          </p>
          <p className="text-2xl text-white text-bold font-roboto">
            Launch Year: <span>{props.launch_year}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
